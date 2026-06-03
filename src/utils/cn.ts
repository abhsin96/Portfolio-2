/**
 * Utility function for conditionally joining CSS class names.
 * Filters out falsy values (undefined, null, false, empty strings)
 * and joins the remaining class names with a space.
 *
 * @param classes - A list of class name values. Falsy values are ignored.
 * @returns A single string of space-separated class names.
 *
 * @example
 * cn('btn', isActive && 'btn--active', className)
 * // => 'btn btn--active' (if isActive is true and className is undefined)
 */
export function cn(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}
