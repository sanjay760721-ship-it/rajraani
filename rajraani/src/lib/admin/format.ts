/** Paise → "₹68,000", whole rupees, Indian digit grouping. Client-safe. */
export const rupees = (minor: number) => `₹${Math.round(minor / 100).toLocaleString("en-IN")}`;
