/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
		domains: [
			"links.papareact.com",
			"api.npoint.io"
		]
	}
}

export default nextConfig
