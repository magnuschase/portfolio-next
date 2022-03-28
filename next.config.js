/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const nextConfig = {
	reactStrictMode: true,
	env: {
		// API_URL: "http://localhost:3000/api"
	},
	webpack: (config, options) => {
		config.resolve.fallback = {
			fs: false
		}
		return config
	}
}

module.exports = nextConfig
