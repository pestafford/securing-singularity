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
				},
				dark: {
					DEFAULT: '#111111',
					card: '#252525',
					hover: '#383838',
					border: '#383838',
					subtle: '#1A1A1A',
				},
				text: {
					primary: '#F5F5F5',
					secondary: '#B0B0B0',
					muted: '#808080',
				},
			},
			fontFamily: {
				mono: [
					'IBM Plex Mono',
					'monospace',
				],
				sans: [
					'IBM Plex Sans',
					'system-ui',
					'sans-serif',
				],
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #1EAEDB 0%, #14B8A6 100%)',
				'gradient-teal': 'linear-gradient(135deg, #14B8A6 0%, #1EAEDB 100%)',
				'gradient-dark': 'linear-gradient(180deg, #111111 0%, #1A1A1A 100%)',
				'gradient-dark-card': 'linear-gradient(180deg, #1A1A1A 0%, #252525 100%)',
			},
		}
	},
	plugins: [],
} satisfies Config;
