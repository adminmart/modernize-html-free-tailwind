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
			"primaryhover": "var(--color-btnprimary-hover-bg)",
			"secondaryhover": "var(--color-btnsecondary-hover-bg)",
			"successhover": "var(--color-btnsuccess-hover-bg)",
			"warninghover": "var(--color-btnwarning-hover-bg)",
			"errorhover": "var(--color-btnerror-hover-bg)",
			"infohover": "var(--color-btninfo-hover-bg)",
			"darkhover": "var(--color-btndark-hover-bg)",
			"lighthover": "var(--color-btnlight-hover-bg)",
			"border": "var(--color-border)",
			"white": "var(--color-white)",
			"lightgray":"var( --color-lightgray)",
			"body":"var( --color-body)",
			"transparent":"var( --color-transparent)",
			"heading":"var(--color-heading)",
			"muted":"var(--color-muted)",
			"gray100": "var(--color-gray100)",

			//Dark Colors Variables
			"dark": "var(--color-dark)",
			"darklink":"var(--color-darklink)",
			"darkborder": "var(--color-darkborder)",
			"darkgray":"var(--color-darkgray)",
			"darkinfo": "var(--color-darkinfo)",
			"darkprimary":"var(--color-darkprimary)",
			"darksecondary":"var(--color-darksecondary)",

		},

		// textColor: {
		//   "primary" : "var(--color-primary)",
		//   "secondary" : "var(--color-secondary)",
		//   "info": "var(--color-info)",
		//   "success": "var(--color-success)",
		//   "warning": "var(--color-warning)",
		//   "error": "var(--color-error)",
		//   "lightprimary": "var(--color-lightprimary)",
		//   "lightsecondary": "var(--color-lightsecondary)",
		//   "lightsuccess": "var(--color-lightsuccess)",
		//   "lighterror": "var(--color-lighterror)",
		//   "lightinfo": "var(--color-lightinfo)",
		//   "lightwarning": "var(--color-lightwarning)",
		//   "textPrimary": "var(--color-textPrimary)",
		//   "textSecondary": "var(--color-textSecondary)",
		//   "borderColor": "var(--color-borderColor)",
		//   "inputBorder": "var(--color-inputBorder)",
		//   "surface": "var(--color-surface)",
		//   "grey100": "var(--color-grey100)",
		//   "grey200": "var(--color-grey200)",
		//   "themewhite":"var(--color-themewhite)",
		//   "muted":"var(--color-muted)",
		// 	...colors
		// },
		// backgroundColor: {
		//   "primary" : "var(--color-primary)",
		//   "secondary" : "var(--color-secondary)",
		//   "info": "var(--color-info)",
		//   "success": "var(--color-success)",
		//   "warning": "var(--color-warning)",
		//   "error": "var(--color-error)",
		//   "lightprimary": "var(--color-lightprimary)",
		//   "lightsecondary": "var(--color-lightsecondary)",
		//   "lightsuccess": "var(--color-lightsuccess)",
		//   "lighterror": "var(--color-lighterror)",
		//   "lightinfo": "var(--color-lightinfo)",
		//   "lightwarning": "var(--color-lightwarning)",
		//   "textPrimary": "var(--color-textPrimary)",
		//   "textSecondary": "var(--color-textSecondary)",
		//   "borderColor": "var(--color-borderColor)",
		//   "inputBorder": "var(--color-inputBorder)",
		//   "surface": "var(--color-surface)",
		//   "dark-surface": "var(--color-dark-surface)",
		//   "grey100": "var(--color-grey100)",
		//   "grey200": "var(--color-grey200)",
		//   "themewhite":"var(--color-themewhite)",
		//   "muted":"var(--color-muted)",
		// 	...colors
		// },

		// borderColor: {
		// 	"borderColor": "var(--color-borderColor)",
		// 	"borderPrimary": "var(--color-primary)",
		// 	...colors
		// },

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
