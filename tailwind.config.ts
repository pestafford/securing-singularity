import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				orbitron: [
					'Orbitron',
					'Segoe UI',
					'Arial',
					'sans-serif',
				],
			},
		}
	},
	plugins: [],
} satisfies Config;
