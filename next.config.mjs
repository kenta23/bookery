/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },
            {
                protocol: "http",
                hostname: "books.google.com"
            },
            {
                protocol: "https",
                hostname: "daisyui.com"
            },
            {
                protocol: 'https',
                hostname: 'covers.openlibrary.org'
            }
        ]
     },
     
};

export default nextConfig;
