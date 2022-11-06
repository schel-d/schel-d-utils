/**
 * Returns the same string is kebab-case form. Returned string is guaranteed to
 * only contain a-z, numbers, and dashes. All other symbols such as dollar
 * signs, and accented characters will be removed (for better or for worse).
 * @param text The string to convert.
 */
export function kebabify(text: string): string {
  return text
    // Make lowercase.
    .toLowerCase()

    // Replace spaces with dashes.
    .replace(/\s/g, "-")

    // Remove all other non ASCII letters/numbers.
    .replace(/[^a-z0-9-]/g, "");
}
