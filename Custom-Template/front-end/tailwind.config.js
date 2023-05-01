/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
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
  plugins: [
		require('flowbite/plugin')
	],
}

