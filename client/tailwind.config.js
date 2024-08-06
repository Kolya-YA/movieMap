/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				playfair: ["Playfair"],
				"black-ops-one": ["Black Ops One", "cursive"],
			},
			colors: {
				"block-bg": "#f1f1f140",
        "main-text": "#f1f1f1",
			},

			boxShadow: {
				diffused:
					"0 0 2px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 255, 255, 0.4)",
			},
		},
	},
	plugins: [],
};