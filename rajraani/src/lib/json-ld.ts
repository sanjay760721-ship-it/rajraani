// JSON is embedded in an HTML script element. Escape '<' so a catalogue value
// cannot close that element and inject markup into the page.
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
