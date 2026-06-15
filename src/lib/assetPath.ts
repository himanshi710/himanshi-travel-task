// Prepends the basePath for GitHub Pages deployment.
// In local dev (no BASE_PATH), returns the path unchanged.
const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/himanshi-travel-task" : "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
