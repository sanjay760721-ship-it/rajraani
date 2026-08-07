
export const metadata = { title: "Artisans & Loom Registry" };

type ArtisanRow = {
  id: number;
  name: string;
  location: string;
  speciality: string;
  years_experience: number;
  loom_count: number;
};

export default function ArtisansAdminPage() {
  // Sample/Initial Artisan Registry Data
  const artisans: ArtisanRow[] = [
    {
      id: 1,
      name: "Master Weaver Ramprasad",
      location: "Madanpura, Varanasi",
      speciality: "Kadhua Saree Weaving & Real Zari",
      years_experience: 34,
      loom_count: 3,
    },
    {
      id: 2,
      name: "Ustad Mukhtar Ahmad",
      location: "Lallapura, Varanasi",
      speciality: "Tanchoi & Jamawar Brocades",
      years_experience: 42,
      loom_count: 5,
    },
    {
      id: 3,
      name: "Shri Devendra Vishwakarma",
      location: "Ramnagar, Varanasi",
      speciality: "Katikari Cutwork & Jangla Motifs",
      years_experience: 28,
      loom_count: 2,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6">
        <div>
          <h1 className="text-h2">Artisan & Loom Registry</h1>
          <p className="text-caption mt-1 text-ink-muted">
            Directory of Varanasi master weavers, workshop looms, and craft provenance profiles.
          </p>
        </div>
        <button
          type="button"
          className="bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90"
        >
          + Register New Artisan
        </button>
      </div>

      {/* Grid of Artisans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="border border-rule bg-bg p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="eyebrow text-ink-muted text-[10px] uppercase">Master Craftsman</span>
                <h2 className="font-display text-xl font-semibold text-ink mt-0.5">{artisan.name}</h2>
              </div>
              <span className="eyebrow text-[10px] px-2 py-0.5 border border-rule bg-bg-alt text-ink-muted">
                {artisan.loom_count} Looms
              </span>
            </div>

            <div className="text-caption text-ink-body space-y-1">
              <p>📍 <strong>Location:</strong> {artisan.location}</p>
              <p>🧵 <strong>Speciality:</strong> {artisan.speciality}</p>
              <p>⏳ <strong>Experience:</strong> {artisan.years_experience} Years of Craft</p>
            </div>

            <div className="border-t border-rule pt-4 flex justify-between items-center text-xs">
              <span className="text-caption text-ink-muted">Provenance Tagged</span>
              <button type="button" className="eyebrow text-ink underline">
                Edit Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
