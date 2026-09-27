"use client";

import { useEffect, useState, useTransition } from "react";

import { saveFooterAction } from "@/lib/admin/footer-actions";
import type { SiteLink } from "@/lib/admin/site-links";
import { SOCIAL_NAMES, type FooterSettings, type SocialName } from "@/lib/content/footer-defs";

import { LINKS_DATALIST, LinkHint, SiteLinksDatalist, SiteLinksProvider } from "./SectionEditor";

/**
 * The footer and the newsletter pop-up, laid out like the Menu screen: a
 * header with Save & publish, then one titled card per part of the footer, in
 * the order they sit on the page.
 */

function Text({
  label,
  value,
  onChange,
  multiline = false,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="a-label block" style={{ color: "var(--a-outline)" }}>{label}</span>
      {multiline ? (
        <textarea className="a-input mt-1 w-full" rows={2} value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input className="a-input mt-1 w-full" value={value} onChange={(event) => onChange(event.target.value)} />
      )}
      {hint ? <span className="a-label mt-1 block" style={{ color: "var(--a-outline)" }}>{hint}</span> : null}
    </label>
  );
}

function Card({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <section className="a-card space-y-4 p-5" style={{ borderRadius: "var(--a-radius-md)" }}>
      <div>
        <h2 className="a-heading-sm">{title}</h2>
        <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>{hint}</p>
      </div>
      {children}
    </section>
  );
}

function moved<T>(list: T[], index: number, delta: number): T[] {
  const target = index + delta;
  if (target < 0 || target >= list.length) return list;
  const next = [...list];
  [next[index], next[target]] = [next[target]!, next[index]!];
  return next;
}

export function FooterEditor({ initial, links }: { initial: FooterSettings; links: SiteLink[] }) {
  const [value, setValue] = useState(initial);
  const [dirty, setDirty] = useState(false);
  const [problems, setProblems] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const set = <K extends keyof FooterSettings>(key: K, next: FooterSettings[K]) => {
    setValue((current) => ({ ...current, [key]: next }));
    setDirty(true);
    setSaved(false);
  };

  const setColumn = (index: number, column: FooterSettings["columns"][number]) =>
    set("columns", value.columns.map((other, i) => (i === index ? column : other)));

  const socialHref = (name: SocialName) => value.socials.find((social) => social.label === name)?.href ?? "";
  const setSocial = (name: SocialName, href: string) => {
    const rest = value.socials.filter((social) => social.label !== name);
    set("socials", href.trim() ? [...rest, { label: name, href: href.trim() }].sort((a, b) => SOCIAL_NAMES.indexOf(a.label) - SOCIAL_NAMES.indexOf(b.label)) : rest);
  };

  const save = () =>
    startTransition(async () => {
      const result = await saveFooterAction(value);
      if (!result.ok) {
        setProblems(result.problems);
        return;
      }
      setProblems([]);
      setDirty(false);
      setSaved(true);
    });

  return (
    <SiteLinksProvider value={links}>
      <SiteLinksDatalist />
      <div className="space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="a-heading-lg">Footer</h1>
            <p className="a-body-md mt-1 max-w-2xl" style={{ color: "var(--a-ink-variant)" }}>
              The bottom of every page, and the newsletter pop-up. The email, phone and hours in the
              footer are changed under <a className="underline" href="/admin/text?place=Contact%20details%20(footer)">Contact details</a>.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {dirty ? <span className="a-label" style={{ color: "var(--a-status-waiting)" }}>Unsaved changes</span> : null}
            {saved && !dirty ? <span className="a-body-sm" style={{ color: "var(--a-status-done)" }}>✓ Saved — every page shows it now.</span> : null}
            <button type="button" className="a-btn-primary" disabled={!dirty || pending} onClick={save}>
              {pending ? "Saving…" : "Save & publish"}
            </button>
          </div>
        </header>

        {problems.length ? (
          <div role="alert" className="a-body-sm px-4 py-3" style={{ backgroundColor: "var(--a-negative-container)", borderRadius: "var(--a-radius)" }}>
            <strong>Not saved yet — please fix:</strong>
            <ul className="mt-1 list-disc pl-5">{problems.map((problem) => <li key={problem}>{problem}</li>)}</ul>
          </div>
        ) : null}

        <Card title="Talk to us" hint="The first column: the heading and the words around your contact details.">
          <div className="grid gap-4 md:grid-cols-3">
            <Text label="Heading" value={value.talkHeading} onChange={(v) => set("talkHeading", v)} />
            <Text label="WhatsApp link text" value={value.whatsappLabel} onChange={(v) => set("whatsappLabel", v)} />
            <Text label="Words before the hours" value={value.hoursLabel} onChange={(v) => set("hoursLabel", v)} />
          </div>
        </Card>

        {value.columns.map((column, columnIndex) => (
          <Card
            key={columnIndex}
            title={columnIndex === 0 ? "Links under Talk to us" : "Links in the middle column"}
            hint="A heading and a list of links. Pick where each goes from the list."
          >
            <Text label="Heading" value={column.heading} onChange={(heading) => setColumn(columnIndex, { ...column, heading })} />
            <ol className="space-y-3">
              {column.links.map((link, linkIndex) => {
                const setLink = (next: typeof link) =>
                  setColumn(columnIndex, { ...column, links: column.links.map((other, i) => (i === linkIndex ? next : other)) });
                return (
                  <li key={linkIndex} className="flex flex-wrap items-start gap-3 border-t pt-3" style={{ borderColor: "var(--a-outline-variant)" }}>
                    <label className="block w-56">
                      <span className="a-label block" style={{ color: "var(--a-outline)" }}>Link text</span>
                      <input className="a-input mt-1 w-full" value={link.label} onChange={(event) => setLink({ ...link, label: event.target.value })} />
                    </label>
                    <label className="block min-w-0 flex-1">
                      <span className="a-label block" style={{ color: "var(--a-outline)" }}>Goes to</span>
                      <input className="a-input mt-1 w-full" list={LINKS_DATALIST} value={link.href} placeholder="Start typing a page, collection or piece…" onChange={(event) => setLink({ ...link, href: event.target.value })} />
                      <LinkHint href={link.href} />
                    </label>
                    <span className="flex gap-1 pt-6">
                      <button type="button" className="a-btn-icon" aria-label="Move link up" disabled={linkIndex === 0} onClick={() => setColumn(columnIndex, { ...column, links: moved(column.links, linkIndex, -1) })}>↑</button>
                      <button type="button" className="a-btn-icon" aria-label="Move link down" disabled={linkIndex === column.links.length - 1} onClick={() => setColumn(columnIndex, { ...column, links: moved(column.links, linkIndex, 1) })}>↓</button>
                    </span>
                    <button type="button" className="a-label pt-7 underline" style={{ color: "var(--a-negative)" }} onClick={() => setColumn(columnIndex, { ...column, links: column.links.filter((_, i) => i !== linkIndex) })}>
                      Remove
                    </button>
                  </li>
                );
              })}
            </ol>
            <button type="button" className="a-btn-secondary" disabled={column.links.length >= 10} onClick={() => setColumn(columnIndex, { ...column, links: [...column.links, { label: "", href: "" }] })}>
              + Add a link
            </button>
          </Card>
        ))}

        <Card title="Social links" hint="Paste the full address of each account. Leave one empty and its icon is not shown.">
          <div className="grid gap-4 md:grid-cols-2">
            {SOCIAL_NAMES.map((name) => (
              <Text key={name} label={name} value={socialHref(name)} onChange={(href) => setSocial(name, href)} hint={name === "Instagram" ? "e.g. https://www.instagram.com/yourshop" : undefined} />
            ))}
          </div>
        </Card>

        <Card title="Stay in touch (newsletter)" hint="The last column. Sign-ups are saved and listed under Messages.">
          <div className="grid gap-4 md:grid-cols-3">
            <Text label="Heading" value={value.newsletterHeading} onChange={(v) => set("newsletterHeading", v)} />
            <Text label="Line under it" value={value.newsletterText} onChange={(v) => set("newsletterText", v)} />
            <Text label="Button" value={value.newsletterButton} onChange={(v) => set("newsletterButton", v)} />
          </div>
        </Card>

        <Card title="Newsletter pop-up" hint="Appears once per visit, after 15 seconds or when a visitor moves to leave.">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={value.popupEnabled} onChange={(event) => set("popupEnabled", event.target.checked)} />
            <span className="a-body-sm">Show the pop-up to visitors</span>
          </label>
          {value.popupEnabled ? (
            <div className="grid gap-4 md:grid-cols-2">
              <Text label="Title on the dark side" value={value.popupSideTitle} onChange={(v) => set("popupSideTitle", v)} />
              <Text label="Line on the dark side" value={value.popupSideText} onChange={(v) => set("popupSideText", v)} />
              <Text label="Heading above the form" value={value.popupTitle} onChange={(v) => set("popupTitle", v)} />
              <Text label="Line above the form" value={value.popupText} onChange={(v) => set("popupText", v)} />
              <Text label="Small print under the button" value={value.popupFootnote} onChange={(v) => set("popupFootnote", v)} />
            </div>
          ) : null}
        </Card>

        <Card title="Copyright line" hint="The name in “© 2026 …” at the very bottom.">
          <Text label="Name" value={value.copyrightName} onChange={(v) => set("copyrightName", v)} />
        </Card>
      </div>
    </SiteLinksProvider>
  );
}
