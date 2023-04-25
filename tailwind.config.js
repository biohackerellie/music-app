/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
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

