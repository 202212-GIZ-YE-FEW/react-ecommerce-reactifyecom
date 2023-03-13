/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
			colors: {
				'primary-black': '#1A232E',
				'secondary-black': '#c7c7c7',
			},
		},
	},
	plugins: [],
}
