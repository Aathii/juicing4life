// The site is served from a subpath on GitHub Pages (/juicing4life/), so every
// internal link and public asset is built from Vite's base URL.
export const BASE = import.meta.env.BASE_URL

export const HOME_HREF = BASE
export const STORY_HREF = `${BASE}story/`
export const MENU_HREF = `${BASE}#menu`
export const VISIT_HREF = `${BASE}#visit`
