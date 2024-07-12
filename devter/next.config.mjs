/** @type {import('next').NextConfig} */
const nextConfig = {
    "experimental": {
        serverActions: true
    },
    esLint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
