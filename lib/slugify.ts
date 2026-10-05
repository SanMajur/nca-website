/** "About Us" -> "about-us" (used to build stable ids for aria-controls) */
export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}
