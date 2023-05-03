/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,vue}", "./index.html"],
	darkMode: "class",
	theme: {
		colors: {
			underline: "rgba(0,186,126,0.20)",
			green: "rgba(0,186,126,1)",
			white: "rgba(255,255,255,1)",
			black: "rgb(24, 24, 24, 1)"
		},
		backgroundColor: ({ theme }) => ({
			light: "rgba(255,255,255,0.9)",
			dark: "rgb(24, 24, 24, 1)",
			underline: "rgba(0,186,126,0.20)",
			loader: "rgba(209,213,219,0.9)"
		}),
		textColor: ({ theme }) => ({
			// light & dark combined into 1 in main.css
			"lightMain-hover": "rgba(0,186,126,0.20)",
			lightMain: "rgba(0,45,0,1)",
			lightSecondary: "rgba(110,110,110, 0.90)",
			lightTertiary: "rgba(100,100,100,0.5)",
			"darkMain-hover": "rgba(0,186,126,0.20)",
			darkMain: "rgba(0, 189, 126, 1)",
			darkSecondary: "rgba(130,189,130,0.6)",
			darkTertiary: "rgba(130,189,130,0.4)",
			...theme("colors")
		}),
		fontFamily: {
			heading: [
				"'SF Pro'",
				"'Inter'",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe" + " UI",
				"Roboto",
				"Oxygen",
				"Ubuntu",
				"Cantarell",
				"Fira" + " Sans",
				"Droid Sans",
				"Helvetica Neue",
				"sans-serif"
			],
			body: [
				"'SF Pro'",
				"'Inter'",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe" + " UI",
				"Roboto",
				"Oxygen",
				"Ubuntu",
				"Cantarell",
				"Fira" + " Sans",
				"Droid Sans",
				"Helvetica Neue",
				"sans-serif"
			],
			mono: [
				'"SFMono-Regular"',
				"Menlo",
				"Monaco",
				"Consolas",
				'"Liberation Mono"',
				'"Courier New"',
				"monospace"
			],
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"]
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem"
			},
			borderRadius: {
				"4xl": "2rem"
			}
		}
	},
	plugins: []
}
