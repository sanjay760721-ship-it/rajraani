export const metadata = { title: "Analytics & Insights" };

type TimeRange = "7d" | "30d" | "90d" | "ytd";

const TIME_RANGES: { value: TimeRange; label: string }[] = [
  { value: "7d", label: "Last 7 Days" },
  { value: "30d", label: "Last 30 Days" },
  { value: "90d", label: "Last 90 Days" },
  { value: "ytd", label: "Year to Date" },
];

const CHART_COLORS = {
  primary: "var(--a-accent)",
  secondary: "var(--a-ink)",
  accent: "var(--a-accent-container)",
  grid: "rgba(196, 199, 199, 0.3)",
  positive: "var(--a-positive)",
  negative: "var(--a-negative)",
};

const INSIGHTS = [
  {
    type: "opportunity",
    icon: "diamond",
    title: "Bridal Collection Surge",
    description:
      "Engagement with high-ticket bridal sets has increased by 42% over the last quarter. Consider increasing targeted inventory ahead of the upcoming wedding season.",
    action: { label: "VIEW INVENTORY", href: "/admin/collections?filter=bridal" },
  },
  {
    type: "geographic",
    icon: "public",
    title: "Emerging Market: Dubai",
    description:
      "International orders from the UAE region are showing sustained growth, currently accounting for 18% of overseas revenue. Recommend localized marketing.",
    action: { label: "ANALYZE REGION", href: "/admin/analytics?region=uae" },
  },
  {
    type: "retention",
    icon: "repeat",
    title: "Returning Client Strength",
    description:
      "75% of revenue comes from returning clients — well above the luxury benchmark of 60%. The provenance storytelling is working.",
    action: { label: "VIEW COHORTS", href: "/admin/analytics?view=retention" },
  },
  {
    type: "conversion",
    icon: "trending_down",
    title: "Mobile Checkout Friction",
    description:
      "Mobile conversion sits at 2.1% vs 4.8% desktop. The sticky buy bar helps, but the payment form needs optimization for thumb reach.",
    action: { label: "VIEW FUNNEL", href: "/admin/analytics?view=funnel" },
  },
];

const COLLECTION_PERFORMANCE = [
  { name: "Maharani Pearls", revenue: 1250000, orders: 24, growth: 18.5, color: "var(--a-accent)" },
  { name: "Kundan Revival", revenue: 980000, orders: 18, growth: 12.3, color: "var(--a-ink)" },
  { name: "Temple Gold", revenue: 750000, orders: 14, growth: 8.7, color: "var(--a-outline-variant)" },
  { name: "Contemporary Polki", revenue: 520000, orders: 12, growth: 22.1, color: "var(--a-accent-dim)" },
  { name: "Heritage Banarasi", revenue: 410000, orders: 8, growth: -3.2, color: "var(--a-outline)" },
];

const DEMOGRAPHICS = [
  { label: "Metro Areas (Mumbai, Delhi, Bangalore)", value: 60, color: "var(--a-accent)" },
  { label: "Tier 2 Cities", value: 30, color: "var(--a-accent-dim)" },
  { label: "International", value: 10, color: "var(--a-outline-variant)" },
];

const RECENT_ACTIVITY = [
  {
    time: "Just now",
    type: "order",
    title: "New enterprise order",
    detail: "A. Sharma • ₹4,50,000 • Maharani Pearls",
    color: "var(--a-accent)",
  },
  {
    time: "2 hours ago",
    type: "collection",
    title: "Collection published",
    detail: "Vasant Spring Edit • 12 pieces added",
    color: "var(--a-ink)",
  },
  {
    time: "5 hours ago",
    type: "alert",
    title: "Low stock alert",
    detail: "3 pieces in Kundan Revival below threshold",
    color: "var(--a-negative)",
  },
  {
    time: "Yesterday",
    type: "customer",
    title: "VIP customer returned",
    detail: "Meera Desai • 3rd purchase this quarter",
    color: "var(--a-outline)",
  },
];

function KPICard({
  label,
  value,
  detail,
  icon,
  tone = "neutral",
  trend,
}: {
  label: string;
  value: string;
  detail: string;
  icon: string;
  tone?: "neutral" | "positive" | "warning";
  trend?: { value: string; isPositive: boolean };
}) {
  const detailColor =
    tone === "positive"
      ? "var(--a-positive)"
      : tone === "warning"
      ? "var(--a-negative)"
      : "var(--a-outline)";

  const trendColor = trend?.isPositive ? "var(--a-positive)" : "var(--a-negative)";

  return (
    <div className="a-card a-card-interactive p-8 flex flex-col gap-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--a-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex justify-between items-start">
        <span className="a-label" style={{ color: "var(--a-outline)" }}>
          {label}
        </span>
        <span
          className="material-symbols-outlined"
          style={{
            color: tone === "positive" ? "var(--a-positive)" : tone === "warning" ? "var(--a-negative)" : "var(--a-ink)",
            fontSize: "24px",
          }}
        >
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="a-figure text-4xl" style={{ color: "var(--a-ink)" }}>
          {value}
        </span>
        <span className="text-sm leading-5" style={{ color: detailColor }}>
          {detail}
        </span>
        {trend && (
          <span
            className="flex items-center gap-1 mt-2 text-sm"
            style={{ color: trendColor }}
          >
            <span className="material-symbols-outlined text-[14px]">
              {trend.isPositive ? "trending_up" : "trending_down"}
            </span>
            {trend.value}
          </span>
        )}
      </div>
    </div>
  );
}

function RevenueChart({ data, maxValue }: { data: number[]; maxValue: number }) {
  const width = 100;
  const height = 100;
  const stepX = width / (data.length - 1);

  const points = data.map((value, i) => {
    const x = i * stepX;
    const y = height - (value / maxValue) * height * 0.85 - height * 0.075;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  const areaPoints = [
    `${width},${height}`,
    `0,${height}`,
    ...data.map((value, i) => {
      const x = i * stepX;
      const y = height - (value / maxValue) * height * 0.85 - height * 0.075;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }),
  ].join(" ");

  return (
    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id="chart-area-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="var(--a-accent)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--a-accent)" stopOpacity="0" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Grid lines */}
      <g className="a-chart-grid">
        <line x1="0" x2={width} y1={height * 0.25} y2={height * 0.25} />
        <line x1="0" x2={width} y1={height * 0.5} y2={height * 0.5} />
        <line x1="0" x2={width} y1={height * 0.75} y2={height * 0.75} />
      </g>
      {/* Area */}
      <path d={`M${areaPoints}Z`} fill="url(#chart-area-gradient)" />
      {/* Line */}
      <path
        d={`M${points}`}
        fill="none"
        stroke="var(--a-accent)"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />
      {/* Data points */}
      {data.map((value, i) => (
        <circle
          key={i}
          cx={i * stepX}
          cy={height - (value / maxValue) * height * 0.85 - height * 0.075}
          r="1.5"
          fill="var(--a-surface-lowest)"
          stroke="var(--a-accent)"
          strokeWidth="0.5"
        />
      ))}
      {/* Highlight last point */}
      {(() => {
        if (data.length === 0) return null;
        const lastValue = data[data.length - 1]!;
        const lastX = (data.length - 1) * stepX;
        const lastY = height - (lastValue / maxValue) * height * 0.85 - height * 0.075;
        return (
          <>
            <circle
              cx={lastX}
              cy={lastY}
              r="5"
              fill="var(--a-surface-lowest)"
              stroke="var(--a-accent)"
              strokeWidth="2"
            />
            <circle
              cx={lastX}
              cy={lastY}
              r="10"
              fill="var(--a-accent)"
              opacity="0.15"
              className="animate-pulse"
            />
          </>
        );
      })()}
    </svg>
  );
}

function DonutChart({
  segments,
  centerLabel,
  centerValue,
}: {
  segments: { value: number; color: string }[];
  centerLabel: string;
  centerValue: string;
}) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  /*
   * Each arc needs the sum of everything before it. Accumulating into a `let`
   * inside the `.map()` below reassigns during render, which React's compiler
   * rejects — under memoisation the closure can be re-run out of order and the
   * offsets silently drift. Resolving the running totals up front keeps the
   * render itself a pure read.
   */
  const arcs = segments.reduce<
    { value: number; color: string; dashArray: number; dashOffset: number }[]
  >((acc, segment) => {
    const consumed = acc.reduce((sum, a) => sum + a.dashArray, 0);
    const dashArray = total === 0 ? 0 : (segment.value / total) * circumference;
    acc.push({
      ...segment,
      dashArray,
      dashOffset: circumference - consumed - dashArray,
    });
    return acc;
  }, []);

  return (
    <div className="relative w-48 h-48 -rotate-90">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background track */}
        <circle
          cx="50"
          cy="50"
          fill="transparent"
          r={radius}
          stroke="color-mix(in srgb, var(--a-outline-variant) 30%, transparent)"
          strokeWidth="12"
        />
        {/* Segments */}
        {arcs.map((segment, i) => {
          const { dashArray, dashOffset } = segment;
          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              fill="transparent"
              r={radius}
              stroke={segment.color}
              strokeDasharray={`${dashArray} ${circumference}`}
              strokeDashoffset={dashOffset}
              strokeWidth="12"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="a-figure text-5xl font-bold" style={{ color: "var(--a-ink)" }}>
          {centerValue}
        </span>
        <span className="a-label mt-2" style={{ color: "var(--a-outline)" }}>
          {centerLabel}
        </span>
      </div>
    </div>
  );
}

function BarChart({ data, maxValue, colors }: { data: number[]; maxValue: number; colors: string[] }) {
  return (
    <div className="flex-1 min-h-[250px] w-full relative flex items-end justify-between gap-2 md:gap-6 px-4">
      {/* Grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
        {[0.25, 0.5, 0.75, 1].map((frac) => (
          <div key={frac} className="w-full h-[1px] a-chart-grid" />
        ))}
      </div>
      {/* Bars */}
      {data.map((value, i) => (
        <div
          key={i}
          className="relative z-10 flex flex-col items-center gap-2 group flex-1"
        >
          <div
            className="w-full rounded-t-sm transition-all duration-500 group-hover:opacity-80"
            style={{
              height: `${(value / maxValue) * 100}%`,
              backgroundColor: colors[i % colors.length],
            }}
          />
          <span className="a-label" style={{ color: "var(--a-outline)" }}>
            {["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"][i]}
          </span>
        </div>
      ))}
    </div>
  );
}

function HeatmapCell({ intensity }: { intensity: number }) {
  const opacity = 0.1 + intensity * 0.9;
  return (
    <div
      className="aspect-square transition-colors hover:opacity-100"
      style={{
        backgroundColor: "var(--a-accent)",
        opacity,
      }}
    />
  );
}

export default function AnalyticsAdminPage() {
  const revenueData = [420, 580, 480, 750, 920, 1080, 1250];
  const maxRevenue = Math.max(...revenueData);
  const barColors = ["var(--a-accent)", "var(--a-ink)", "var(--a-accent-dim)", "var(--a-accent)", "var(--a-ink)", "var(--a-accent-dim)", "var(--a-accent)"];
  const collectionRevenues = COLLECTION_PERFORMANCE.map((c) => c.revenue);
  const maxCollectionRevenue = Math.max(...collectionRevenues);

  return (
    <div className="flex flex-col gap-12 px-2">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b a-divider-strong pb-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="a-label" style={{ color: "var(--a-accent)" }}>
            Intelligence
          </span>
          <h1 className="a-display-md" style={{ color: "var(--a-ink)" }}>
            Analytics & Insights
          </h1>
          <p className="a-body-lg" style={{ color: "var(--a-ink-variant)" }}>
            Performance metrics and strategic observations for the current quarter.
            Data is refreshed daily.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="a-btn-secondary flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export Report
          </button>
          <div className="flex bg-surface-high rounded-pill p-1 border" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 40%, transparent)" }}>
            {TIME_RANGES.map((range) => (
              <button
                key={range.value}
                className={`a-label px-4 py-2 rounded-pill transition-all ${
                  range.value === "30d"
                    ? "bg-ink text-surface-lowest"
                    : "text-ink-variant hover:text-ink"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* KPI Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          label="Total Revenue"
          value="₹42.8M"
          detail="vs last quarter"
          icon="trending_up"
          tone="positive"
          trend={{ value: "+18.4%", isPositive: true }}
        />
        <KPICard
          label="Active Customers"
          value="14,209"
          detail="vs last quarter"
          icon="group"
          tone="positive"
          trend={{ value: "+5.2%", isPositive: true }}
        />
        <KPICard
          label="Conversion Rate"
          value="3.8%"
          detail="vs last quarter"
          icon="monitoring"
          tone="warning"
          trend={{ value: "-0.4%", isPositive: false }}
        />
        <KPICard
          label="Avg Order Value"
          value="₹145K"
          detail="vs last quarter"
          icon="shopping_cart_checkout"
          tone="positive"
          trend={{ value: "+5.2%", isPositive: true }}
        />
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Trajectory - 2/3 width */}
        <div className="lg:col-span-2 a-card p-8 flex flex-col gap-8">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="a-heading-md" style={{ color: "var(--a-ink)" }}>
                Sales Trajectory
              </h2>
              <p className="a-body-sm mt-1" style={{ color: "var(--a-ink-variant)" }}>
                Monthly revenue breakdown across collections.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.primary }} />
                <span className="a-label" style={{ color: "var(--a-ink-variant)" }}>Bridal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.secondary }} />
                <span className="a-label" style={{ color: "var(--a-ink-variant)" }}>Ready-to-wear</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative h-[300px]">
            <BarChart data={revenueData} maxValue={maxRevenue} colors={barColors} />
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-4 pt-4 a-chart-grid border-t" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 20%, transparent)" }}>
              {["JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN"].map((m) => (
                <span key={m} className="a-label" style={{ color: "var(--a-ink-variant)" }}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Audience Donut - 1/3 width */}
        <div className="a-card p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-8 left-8 w-full">
            <h2 className="a-heading-sm" style={{ color: "var(--a-ink)" }}>
              Audience
            </h2>
            <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
              Returning vs New
            </p>
          </div>
          <DonutChart
            segments={[
              { value: 75, color: CHART_COLORS.primary },
              { value: 25, color: CHART_COLORS.accent },
            ]}
            centerLabel="RETURNING"
            centerValue="75%"
          />
          <div className="w-full mt-8 space-y-4">
            {DEMOGRAPHICS.map((d, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-4" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 20%, transparent)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="a-body-lg" style={{ color: "var(--a-ink)" }}>
                    {d.label}
                  </span>
                </div>
                <span className="a-body-lg" style={{ color: "var(--a-ink)", fontWeight: 500 }}>
                  {d.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Performance & Heatmap */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Collection Popularity Bar Chart */}
        <div className="a-card p-8">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h2 className="a-heading-md" style={{ color: "var(--a-ink)" }}>
                Collection Performance
              </h2>
              <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                Revenue by collection this quarter.
              </p>
            </div>
          </div>
          <div className="flex-1 min-h-[250px] w-full relative flex items-end justify-between gap-2 md:gap-6 px-4">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
              {[0.25, 0.5, 0.75, 1].map((frac) => (
                <div key={frac} className="w-full h-[1px] a-chart-grid" />
              ))}
            </div>
            {COLLECTION_PERFORMANCE.map((c, i) => (
              <div key={c.name} className="relative z-10 flex flex-col items-center gap-2 group flex-1">
                <div
                  className="w-full rounded-t-sm transition-all duration-500 group-hover:opacity-80"
                  style={{
                    height: `${(c.revenue / maxCollectionRevenue) * 100}%`,
                    backgroundColor: c.color,
                  }}
                />
                <span className="a-label text-center max-w-[80px]" style={{ color: "var(--a-ink-variant)" }}>
                  {c.name}
                </span>
                <span className="a-label text-center text-[10px] font-medium" style={{ color: c.growth >= 0 ? "var(--a-positive)" : "var(--a-negative)" }}>
                  {c.growth >= 0 ? "+" : ""}{c.growth}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {COLLECTION_PERFORMANCE.map((c) => (
              <div key={c.name} className="flex justify-between items-center text-sm">
                <span style={{ color: "var(--a-ink-variant)" }}>{c.name}</span>
                <div className="flex items-center gap-4">
                  <span className="tabular-nums" style={{ color: "var(--a-ink)" }}>₹{c.revenue.toLocaleString("en-IN")}</span>
                  <span className="tabular-nums" style={{ color: "var(--a-ink-variant)" }}>{c.orders} orders</span>
                  <span className="tabular-nums" style={{ color: c.growth >= 0 ? "var(--a-positive)" : "var(--a-negative)" }}>
                    {c.growth >= 0 ? "+" : ""}{c.growth}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Heatmap */}
        <div className="a-card p-8">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <h2 className="a-heading-md" style={{ color: "var(--a-ink)" }}>
                Engagement Heatmap
              </h2>
              <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                Site activity by day & time.
              </p>
            </div>
            <div className="flex items-center gap-2 a-label" style={{ color: "var(--a-ink-variant)" }}>
              <span>Low</span>
              <div className="w-24 h-2 rounded" style={{ background: "linear-gradient(to right, var(--a-surface-high), var(--a-accent))" }} />
              <span>High</span>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-1 a-label text-center text-xs" style={{ color: "var(--a-outline)" }}>
            <div className="p-2" />
            <div className="p-2">Mon</div>
            <div className="p-2">Tue</div>
            <div className="p-2">Wed</div>
            <div className="p-2">Thu</div>
            <div className="p-2">Fri</div>
            <div className="p-2">Sat</div>
            <div className="p-2">Sun</div>
            <div className="flex items-center justify-end pr-2">Morning</div>
            <HeatmapCell intensity={0.1} />
            <HeatmapCell intensity={0.2} />
            <HeatmapCell intensity={0.1} />
            <HeatmapCell intensity={0.3} />
            <HeatmapCell intensity={0.6} />
            <HeatmapCell intensity={0.8} />
            <HeatmapCell intensity={0.5} />
            <div className="flex items-center justify-end pr-2">Afternoon</div>
            <HeatmapCell intensity={0.3} />
            <HeatmapCell intensity={0.4} />
            <HeatmapCell intensity={0.3} />
            <HeatmapCell intensity={0.5} />
            <HeatmapCell intensity={0.8} />
            <HeatmapCell intensity={1.0} />
            <HeatmapCell intensity={0.7} />
            <div className="flex items-center justify-end pr-2">Evening</div>
            <HeatmapCell intensity={0.6} />
            <HeatmapCell intensity={0.7} />
            <HeatmapCell intensity={0.5} />
            <HeatmapCell intensity={0.8} />
            <HeatmapCell intensity={1.0} />
            <HeatmapCell intensity={0.9} />
            <HeatmapCell intensity={0.8} />
          </div>
        </div>
      </section>

      {/* Strategic Insights */}
      <section className="a-card p-8">
        <h2 className="a-display-md mb-10" style={{ color: "var(--a-ink)" }}>
          <span className="inline-block w-12 h-[1px] mr-4" style={{ backgroundColor: "var(--a-accent)" }} />
          Strategic Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSIGHTS.map((insight, i) => (
            <div
              key={i}
              className="relative a-card p-10 border overflow-hidden group cursor-pointer"
              style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 40%, transparent)" }}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform translate-x-4 -translate-y-4">
                <span className="material-symbols-outlined" style={{ fontSize: "120px", color: "var(--a-accent)" }}>
                  {insight.icon}
                </span>
              </div>
              <span className="a-label relative z-10" style={{ color: "var(--a-accent)" }}>
                {insight.type.toUpperCase().replace("_", " ")} DETECTED
              </span>
              <h3 className="a-heading-sm mt-4 mb-4 relative z-10" style={{ color: "var(--a-ink)" }}>
                {insight.title}
              </h3>
              <p className="a-body-md relative z-10 mb-8 leading-relaxed" style={{ color: "var(--a-ink-variant)" }}>
                {insight.description}
              </p>
              <a
                href={insight.action.href}
                className="inline-flex items-center gap-2 a-label relative z-10 border-b transition-all duration-300 hover:pr-4"
                style={{ borderColor: "var(--a-ink)", color: "var(--a-ink)" }}
              >
                {insight.action.label}
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity Feed */}
      <section className="a-card p-8">
        <h2 className="a-heading-md mb-8" style={{ color: "var(--a-ink)" }}>
          Recent Activity
        </h2>
        <div className="a-timeline">
          {RECENT_ACTIVITY.map((activity, i) => (
            <div key={i} className="a-timeline-item">
              <div className="a-timeline-dot a-timeline-dot-accent" style={{ backgroundColor: activity.color }} />
              <span className="a-label mb-1" style={{ color: "var(--a-outline)" }}>
                {activity.time}
              </span>
              <p className="a-body-sm font-medium mb-1" style={{ color: "var(--a-ink)" }}>
                {activity.title}
              </p>
              <p className="a-body-sm" style={{ color: "var(--a-ink-variant)" }}>
                {activity.detail}
              </p>
            </div>
          ))}
        </div>
        <button className="a-btn-ghost w-full mt-8 border-t justify-center" style={{ borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)" }}>
          View All Activity
        </button>
      </section>
    </div>
  );
}