
/** Known segments so slugs read correctly in headings (optional). */
const SEGMENT_LABELS: Record<string, string> = {
  invisalign: "Invisalign",
  botox: "Botox",
  iv: "IV",
  lanap: "LANAP",
  pips: "PIPS",
};

/**
 * Turns a URL segment like `cosmetic-dentistry` into display text
 * `Cosmetic Dentistry` for use before " in Coral Springs".
 */
export function titleFromServiceSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((segment) => {
      const lower = segment.toLowerCase();
      if (SEGMENT_LABELS[lower]) {
        return SEGMENT_LABELS[lower];
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}
