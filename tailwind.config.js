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
					850: '#302d35',
					800: '#504c55',
					700: '#4D6360',
					"shadow": '#2A877B',
					400: '#309B96',
					300: '#39C4A6',
					20: '#FFF0B0'
				},
				projects: {
					100: '#B7C7C5',
					200: '#9BB1AE',
					300: '#7E9B97',
					400: '#4E6461',
					500: '#4D6360'
				}
			}
		},
	},
	plugins: [],
}
