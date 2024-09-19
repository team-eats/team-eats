/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/apis/:path*',
                destination: `${process.env.REST_API_URL}/apis/:path*`
            }
        ]
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images:{
        remotePatterns: [{
        protocol:'https',
        hostname: 'res.cloudinary.com',
        pathname: '*'
        }]
    }
};

export default nextConfig;