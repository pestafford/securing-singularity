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
					DEFAULT: '#2A9D8F',
					dark: '#237B71',
					light: '#3AB5A5',
				},
				secondary: {
					DEFAULT: '#1A1D1B',
					light: '#232724',
				},
				accent: {
					teal: '#2A9D8F',
					warm: '#C4956A',
				},
				dark: {
					DEFAULT: '#1A1D1B',
					card: '#232724',
					hover: '#353a37',
					border: 'rgba(134, 131, 120, 0.15)',
					subtle: '#232724',
				},
				text: {
					primary: '#E0DDD4',
					secondary: '#868378',
					muted: '#5a5750',
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
