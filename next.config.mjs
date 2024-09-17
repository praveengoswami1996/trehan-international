/** @type {import('next').NextConfig} */

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/services',
                destination: '/services/bulk-hiring-solutions',
                permanent: false,
            },
            {
                source: '/approach',
                destination: '/approach/consultative-approach',
                permanent: false,
            },
        ]
    },
}

export default nextConfig;
