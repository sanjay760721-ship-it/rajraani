"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

/**
 * The homepage video band.
 *
 * Three behaviours worth naming, because each one is a decision:
 *
 * 1. **It plays only while it is on screen.** An IntersectionObserver pauses it
 *    the moment it leaves the viewport and resumes when it comes back. On a
 *    ~5,000px page an autoplaying loop otherwise keeps decoding video for the
 *    whole scroll, which costs battery on a laptop and data on a phone.
 *
 * 2. **A manual pause outranks the observer.** If someone presses pause, the
 *    video stays paused when they scroll away and back. Without that flag the
 *    observer would helpfully undo their choice a second later, which is the
 *    kind of thing that reads as a broken button.
 *
 * 3. **`preload="metadata"`, never `auto`.** `auto` invites the browser to
 *    buffer the whole file before anyone has scrolled to it. The source here is
 *    822 MB, so that is the difference between a page that loads and one that
 *    does not. Only the dimensions and duration are fetched up front.
 *
 * Reduced-motion is honoured: the video loads and is playable, but nothing
 * starts on its own.
 */
export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  /** Set when the viewer presses pause. Stops the observer resuming playback. */
  const pausedByUser = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    // Muted playback is the only kind browsers will start unprompted.
    video.muted = video.muted || !video.dataset.unmuted;
    void video.play().catch(() => {
      /* Autoplay refused. The controls still work; nothing to recover here. */
    });
  }, []);

  /* --- Autoplay, gated on visibility ------------------------------------ */
  useEffect(() => {
    const video = videoRef.current;
    const shell = shellRef.current;
    if (!video || !shell) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          if (!pausedByUser.current && !reduced) play();
        } else if (!video.paused) {
          // Not a user pause: the flag stays clear so it resumes on return.
          video.pause();
        }
      },
      // A quarter visible is enough to be worth playing, and the same figure
      // going the other way stops it flickering on and off at the boundary.
      { threshold: 0.25 },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, [play]);

  /* --- Keep React in step with the element ------------------------------ */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(video.muted);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    video.addEventListener("volumechange", onVolume);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("volumechange", onVolume);
    };
  }, []);

  /* --- Fullscreen ------------------------------------------------------- */
  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const togglePlay = (event?: React.MouseEvent) => {
    event?.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      pausedByUser.current = false;
      play();
    } else {
      pausedByUser.current = true;
      video.pause();
    }
  };

  const toggleMute = (event: React.MouseEvent) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const next = !video.muted;
    video.muted = next;
    // Remembered so `play()` does not silently re-mute a video the viewer
    // deliberately turned up.
    if (next) delete video.dataset.unmuted;
    else video.dataset.unmuted = "true";
    setIsMuted(next);
  };

  const toggleFullscreen = (event: React.MouseEvent) => {
    event.stopPropagation();
    const shell = shellRef.current;
    if (!shell) return;

    if (document.fullscreenElement) {
      void document.exitFullscreen().catch(() => {});
    } else {
      // The shell rather than the <video>, so the controls come with it.
      void shell.requestFullscreen().catch(() => {});
    }
  };

  const button =
    "flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 " +
    "text-xs text-white backdrop-blur-md transition-all hover:bg-black/80 " +
    "focus:outline-none focus:ring-1 focus:ring-white/50";
  const label = "hidden sm:inline text-[10px] uppercase tracking-wider";

  return (
    <div ref={shellRef} className="group relative h-full w-full bg-black">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        onClick={togglePlay}
        className={`${className ?? ""} cursor-pointer`}
      />

      <div className="absolute right-6 bottom-6 z-20 flex items-center gap-2 select-none">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={button}
        >
          {isPlaying ? (
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
          <span className={label}>{isPlaying ? "Pause" : "Play"}</span>
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className={button}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M11 5L6 9H2v6h4l5 4V5z" fill="currentColor" />
            {isMuted ? (
              <>
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </>
            ) : (
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            )}
          </svg>
          <span className={label}>{isMuted ? "Unmute" : "Mute"}</span>
        </button>

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Exit full screen" : "Full screen"}
          className={button}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {isFullscreen ? (
              <path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6" />
            ) : (
              <path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6" />
            )}
          </svg>
          <span className={label}>{isFullscreen ? "Exit" : "Full"}</span>
        </button>
      </div>
    </div>
  );
}
