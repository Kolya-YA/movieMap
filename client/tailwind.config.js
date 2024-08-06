/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["Playfair Display", "sans-serif"],
				body: ["Roboto", "system-ui", "sans-serif"],
			},
			colors: {
				"block-bg": "#f1f1f130",
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
