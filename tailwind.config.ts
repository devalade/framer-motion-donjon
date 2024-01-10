import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lexend: ['Lexend'],
				poppins: ['Poppins'],
			},
		},
	},
	plugins: [],
} satisfies Config;
