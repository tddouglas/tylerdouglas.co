/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
	root: true,
	extends: [
		"plugin:vue/vue3-essential",
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		'@vue/eslint-config-typescript',
		"@vue/eslint-config-prettier",
		"prettier"
	],
	ignorePatterns: ["**/dist/*"],
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx,vue}"],
			extends: ["plugin:cypress/recommended"]
		}
	],
	parserOptions: {
		ecmaVersion: "latest"
	},
	rules: {
		"vue/multi-word-component-names": 0
	},
	settings: {
		tailwindcss: {
			config: "./client/tailwind.config.cjs"
		}
	}
}
