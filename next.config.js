/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.websolutionus.com',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
