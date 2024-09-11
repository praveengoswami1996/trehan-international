/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/services/bulk-hiring-solutions',
                permanent: false,
            },
        ]
    },
}

export default nextConfig;
