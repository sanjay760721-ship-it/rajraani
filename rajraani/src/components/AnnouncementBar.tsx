"use client";

import { useEffect, useState } from "react";
import { useSiteText } from "@/components/site-text-context";
import { announcementParts } from "@/lib/content/site-text-defs";
import styles from "./HouseBars.module.css";

export function AnnouncementBar() {
  const parts = announcementParts(useSiteText());
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || parts.length < 2 || preference.matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % parts.length), 6000);
    const stop = () => { if (preference.matches) clearInterval(timer); };
    preference.addEventListener("change", stop);
    return () => { clearInterval(timer); preference.removeEventListener("change", stop); };
  }, [paused, parts.length]);

  if (dismissed || !parts.length) return null;
  const active = index % parts.length;

  return (
    <aside className={styles.announcement} aria-label="Store announcement"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
      <div className={styles.announcementInner}>
        <span className={styles.houseNote}><span className={styles.smallStar} aria-hidden="true">✧</span> A HOUSE OF BANARAS</span>
        <div className={styles.message}>
          <span key={`${active}-${parts[active]}`} className={styles.messageText}>{parts[active]}</span>
        </div>
        <div className={styles.announcementControls}>
          {parts.length > 1 && <div className={styles.dots} aria-label="Announcement messages">
            {parts.map((part, i) => <button type="button" key={`${i}-${part}`} className={styles.dot}
              aria-label={`Show announcement ${i + 1}: ${part}`} aria-pressed={active === i}
              onClick={() => setIndex(i)} />)}
          </div>}
          <button type="button" className={styles.close} onClick={() => setDismissed(true)} aria-label="Close announcement">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
