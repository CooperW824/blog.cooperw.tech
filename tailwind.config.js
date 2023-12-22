/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				paragraph: ['Nunito', 'sans-serif'],
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#07337d',
					secondary: '#7a99d6',
					accent: '#55e9f7',
					neutral: '#1f232d',
					'base-100': '#dbdee6',
				},
				dark: {
					primary: '#82aef8',
					secondary: '#284683',
					accent: '#00D7EB',
					neutral: '#1f242e',
					'base-100': '#191d25',
				},
			},
		],
	},
};
