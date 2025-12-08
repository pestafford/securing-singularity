import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#1EAEDB',
					dark: '#1795BD',
					light: '#4DC4E6',
				},
				secondary: {
					DEFAULT: '#0A2540',
					light: '#1E3A5F',
				},
				accent: {
					teal: '#14B8A6',
					purple: '#8B5CF6',
					orange: '#F97316',
				}
			},
			fontFamily: {
				orbitron: [
					'Orbitron',
					'Segoe UI',
					'Arial',
					'sans-serif',
				],
				display: [
					'Space Grotesk',
					'Orbitron',
					'system-ui',
					'sans-serif',
				],
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #1EAEDB 0%, #14B8A6 100%)',
				'gradient-secondary': 'linear-gradient(135deg, #8B5CF6 0%, #1EAEDB 100%)',
				'gradient-dark': 'linear-gradient(180deg, #0A2540 0%, #1E3A5F 100%)',
				'gradient-orange': 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
			},
		}
	},
	plugins: [],
} satisfies Config;
