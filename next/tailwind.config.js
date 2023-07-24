/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			dark: '#18192b',
			bubble: '#ff1daf',
			puke: '#21e4b3',
			baby: '#3ca2e1',
			purts: '#826bb2',
		},
		extend: {},
	},
	variants: {
		extend: {
			translate: ['group-hover'],
		},
	},
	plugins: [],
};
