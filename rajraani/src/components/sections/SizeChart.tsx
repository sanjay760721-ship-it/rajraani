import type { Section } from "@/lib/content/sections";

type SizeChartSection = Extract<Section, { type: "sizeChart" }>;

/**
 * A size chart: a heading bar, then a figure with its measuring points beside
 * the table of sizes.
 *
 * Laid out as the reference's size chart page is (on request, 24 Sep 2026):
 * a 1024px column, the figure and how-to-measure notes on the left, the table
 * on the right with its header row and label column on a cream ground. Theirs
 * is four flat images; this is the same thing as real text, so it can be read
 * aloud, searched, zoomed and translated, and the numbers edited in one place.
 * The figures are our own drawings.
 */
export function SizeChart({ section }: { section: SizeChartSection }) {
  return (
    <section className="mx-auto max-w-[1024px] px-5 pb-10">
      <h2 className="py-8 font-display text-[20px] font-bold uppercase tracking-[0.02em] text-ink md:px-[46px]">
        {section.title}
      </h2>

      <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-8 md:px-[46px]">
        <div className="flex min-w-0 flex-col items-center gap-4 sm:flex-row sm:items-end">
          <Figure kind={section.figure} labels={section.measures.map((m) => m.point)} />
          <dl className="w-[150px] shrink-0 font-ui text-[10.5px] leading-[1.35] text-ink-body">
            {section.measures.map((measure) => (
              <div key={measure.label} className="border-b border-ink-muted/60 py-2.5 last:border-b-0">
                <dt className="uppercase">{measure.label}</dt>
                <dd>{measure.note}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Scrolls inside itself on a phone rather than widening the page. */}
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-center">
            <thead>
              <tr>
                <th scope="col" className={HEAD_CELL}>Size</th>
                {section.sizes.map((size) => (
                  <th key={size} scope="col" className={HEAD_CELL}>
                    {size}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className={`${HEAD_CELL} h-[92px]`}>
                    {row.label}
                  </th>
                  {row.inches.map((inch, index) => (
                    <td key={index} className="border border-ink-muted/70 px-1 font-ui text-[12.5px] leading-[1.35] text-ink-body">
                      {inch}″
                      <br />
                      {row.cm[index]} cm
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const HEAD_CELL =
  "border border-ink-muted/70 bg-figure px-2 py-5 font-display text-[13px] font-normal uppercase leading-tight text-ink";

/**
 * The figure, drawn rather than photographed: a flat croquis on the cream
 * ground, with a dotted line round each measuring point and a leader out to
 * its label.
 *
 * Each outline is authored as points down the figure's right side and
 * mirrored, then joined with a Catmull-Rom curve — so the body reads as one
 * smooth line rather than a chain of straight segments, and changing a
 * proportion is moving one point, not re-deriving a path. Arms are separate
 * shapes drawn under the body, as a figure's arms hang clear of it.
 */
type Point = readonly [number, number];

const CENTRE = 80;

function smoothClosedPath(points: readonly Point[]): string {
  const n = points.length;
  const at = (i: number) => points[(i + n) % n]!;
  let d = `M${at(0)[0]} ${at(0)[1]}`;
  for (let i = 0; i < n; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  return `${d} Z`;
}

const mirror = (points: readonly Point[]): Point[] =>
  points.map(([x, y]) => [2 * CENTRE - x, y] as const);

/** Right half of body and legs, neck to crotch; mirrored to close. */
function bodyPath(half: readonly Point[]): string {
  const left = mirror(half).slice(0, -1).reverse();
  return smoothClosedPath([...half, ...left]);
}

type FigureShape = {
  body: readonly Point[];
  arm: readonly Point[];
  head: { rx: number; ry: number };
  points: readonly { y: number; rx: number }[];
};

function Figure({ kind, labels }: { kind: "women" | "men"; labels: readonly string[] }) {
  const shape = kind === "women" ? WOMEN : MEN;
  const fill = "var(--color-figure)";
  const line = { stroke: "var(--color-ink-muted)", strokeWidth: 0.7, strokeLinejoin: "round" as const };
  return (
    <svg
      viewBox="0 0 250 460"
      className="h-auto w-[210px] shrink-0 md:w-[230px]"
      role="img"
      aria-label={`Measuring points: ${labels.join(", ").toLowerCase()}`}
    >
      <path d={smoothClosedPath(shape.arm)} fill={fill} {...line} />
      <path d={smoothClosedPath(mirror(shape.arm))} fill={fill} {...line} />
      <path d={bodyPath(shape.body)} fill={fill} {...line} />
      <ellipse cx={CENTRE} cy="34" rx={shape.head.rx} ry={shape.head.ry} fill={fill} {...line} />
      {shape.points.map((point, index) => (
        <g key={point.y}>
          <ellipse
            cx={CENTRE}
            cy={point.y}
            rx={point.rx}
            ry="3.5"
            fill="none"
            stroke="var(--color-accent-hover)"
            strokeWidth="0.9"
            strokeDasharray="1.2 1.8"
          />
          <line x1={CENTRE + point.rx} y1={point.y} x2="168" y2={point.y} stroke="var(--color-ink-muted)" strokeWidth="0.6" />
          <text x="171" y={point.y + 3} fontSize="8" fill="var(--color-ink-body)" fontFamily="var(--font-ui)">
            {labels[index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

const WOMEN: FigureShape = {
  head: { rx: 14, ry: 19 },
  body: [
    [85, 50], [86, 64], [97, 72], [106, 78], [108, 90], [104, 104],
    [106, 120], [103, 140], [98, 166], [104, 192], [110, 214], [109, 236],
    [105, 262], [101, 300], [100, 322], [102, 350], [98, 392], [95, 422],
    [98, 436], [92, 442], [85, 440], [84, 422], [85, 382], [85, 324],
    [83, 282], [80, 256],
  ],
  arm: [
    [106, 80], [111, 90], [114, 122], [116, 168], [119, 206], [121, 232],
    [125, 250], [122, 262], [116, 258], [115, 240], [113, 230], [110, 206],
    [107, 170], [104, 128], [103, 104],
  ],
  points: [
    { y: 120, rx: 26 },
    { y: 166, rx: 18 },
    { y: 216, rx: 30 },
  ],
};

const MEN: FigureShape = {
  head: { rx: 15, ry: 20 },
  body: [
    [86, 51], [87, 66], [102, 72], [113, 80], [114, 96], [110, 106],
    [111, 126], [107, 150], [104, 172], [105, 198], [107, 222], [106, 258],
    [103, 298], [102, 322], [103, 352], [100, 392], [97, 422], [100, 436],
    [94, 443], [86, 441], [84, 422], [85, 382], [86, 324], [84, 284],
    [80, 262],
  ],
  arm: [
    [113, 82], [119, 94], [122, 126], [124, 170], [127, 208], [128, 234],
    [131, 252], [128, 265], [122, 262], [121, 246], [119, 234], [116, 208],
    [113, 172], [111, 130], [110, 106],
  ],
  points: [
    { y: 120, rx: 31 },
    { y: 168, rx: 24 },
    { y: 200, rx: 25 },
    { y: 222, rx: 27 },
  ],
};
