export default {
  '*.{css,json,md,js,cjs,mjs,ts,jsx,tsx,astro}': ['prettier --write'],
  '*.{js,cjs,mjs,ts,tsx,jsx,astro}': ['eslint --fix'],
}
