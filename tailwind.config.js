module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				kapala: {
					900: '#3C3842',
					700: '#4D6360',
					"shadow": '#2A877B',
					400: '#309B96',
					300: '#39C4A6',
					20: '#FFF0B0'
				}
			}
		},
	},
	plugins: [],
}
