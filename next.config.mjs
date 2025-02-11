/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.pexels.com"
			},
			{
				hostname: "d3gxodpb7stuxj.cloudfront.net"
			}
		]
	}
};

export default nextConfig;
