/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.html'],
	theme: {

		colors: {

			//Light Colors Variables
			"primary": "var(--color-primary)",
			"secondary": "var(--color-secondary)",
			"info": "var(--color-info)",
			"success": "var(--color-success)",
			"warning": "var(--color-warning)",
			"error": "var(--color-error)",
			"lightprimary": "var(--color-lightprimary)",
			"lightsecondary": "var(--color-lightsecondary)",
			"lightsuccess": "var(--color-lightsuccess)",
			"lighterror": "var(--color-lighterror)",
			"lightinfo": "var(--color-lightinfo)",
			"lightwarning": "var(--color-lightwarning)",
			"darkprimary": "var(--color-darkprimary)",
			"darksecondary": "var(--color-darksecondary)",
			"darksuccess": "var(--color-darksuccess)",
			"darkwarning": "var(--color-darkwarning)",
			"darkerror": "var(--color-darkerror)",
			"darkinfo": "var(--color-darkinfo)",
			"darkemphasis": "var(--color-darkemphasis)",
			"lightemphasis": "var(--color-lightemphasis)",
			"border": "var(--color-border)",
			"white": "var(--color-white)",
			"lightgray":"var( --color-lightgray)",
			"body":"var( --color-body)",
			"transparent":"var( --color-transparent)",
			"heading":"var(--color-heading)",
			"muted":"var(--color-muted)",
			"gray100": "var(--color-gray100)",
			"dark": "var(--color-dark)",


		},

		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif'],
		},
		borderRadius: {
			'none': '0px',
			'md': '7px',
			'full': '50%',
			'3xl': '9999px'
		},
		extend: {
			boxShadow: {
				'md': 'rgba(145,158,171,0.2) 0px 0px 2px 0px,rgba(145,158,171,0.12) 0px 12px 24px -4px',
			},
		},
		container: {
			center: true,
			padding: '20px',
		},

	},
	variants: {},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'base', // only generate global styles
		}),
		require('@tailwindcss/typography'),
		require('preline/plugin'),
	],
};
