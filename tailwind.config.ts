import type { Config } from "tailwindcss";

export default {
	darkMode: 'class',
	content: [
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#15D7C2',
					dark: '#0FA796',
					light: '#4FE2D2',
				},
				secondary: {
					DEFAULT: '#0E1318',
					light: '#161C21',
				},
				accent: {
					teal: '#15D7C2',
					warm: '#D9A34A',
				},
				dark: {
					DEFAULT: '#0E1318',
					card: '#161C21',
					hover: '#283038',
					border: 'rgba(139, 132, 116, 0.15)',
					subtle: '#161C21',
				},
				text: {
					primary: '#E8E3D8',
					secondary: '#8B8474',
					muted: '#6E685C',
				},
				surface: {
					DEFAULT: 'var(--color-bg)',
					card: 'var(--color-bg-card)',
					subtle: 'var(--color-bg-subtle)',
					elevated: 'var(--color-bg-elevated)',
				},
				border: {
					theme: 'var(--color-border)',
					'theme-hover': 'var(--color-border-hover)',
				},
				heading: 'var(--color-text-primary)',
				body: 'var(--color-text-secondary)',
				muted: 'var(--color-text-muted)',
			},
			fontFamily: {
				display: [
					'Josefin Sans',
					'sans-serif',
				],
				mono: [
					'JetBrains Mono',
					'monospace',
				],
				sans: [
					'Work Sans',
					'system-ui',
					'sans-serif',
				],
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #2A9D8F 0%, #237B71 100%)',
				'gradient-teal': 'linear-gradient(135deg, #2A9D8F 0%, #3AB5A5 100%)',
				'gradient-dark': 'linear-gradient(180deg, #1A1D1B 0%, #232724 100%)',
				'gradient-dark-card': 'linear-gradient(180deg, #232724 0%, #2C312E 100%)',
			},
		}
	},
	plugins: [],
} satisfies Config;
