/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['localhost', 'res.cloudinary.com']
    },
    env: {
        API_URL: process.env.API_URL,
    },
}

module.exports = nextConfig
