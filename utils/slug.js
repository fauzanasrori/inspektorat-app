export function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)/g, "") // Remove leading/trailing hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}
