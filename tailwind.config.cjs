/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xsm: "320px",
			},
		},
	},
	plugins: [],
};
