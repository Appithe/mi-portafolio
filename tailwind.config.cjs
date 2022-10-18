/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Fjalla': ['Fjalla One', 'sans-serif'],
				'Libre': ['Libre Baskerville', 'serif'],
			},
			fontSize: {
				'nav-title': '2.5rem',
				'h1': '4rem',
				'h2': '3rem',
				'h3': '2rem',
				'p': '1.5rem',
				'span': '1rem',
				'button-text': '1.25rem'
			},
			colors: {
				'charcoal': '#364652',
				'magic-mint': '#B4EDD2',
				'dark-electric-blue': '#597388',
			}
		}
	},
	plugins: [],
};
