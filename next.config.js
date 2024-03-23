/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add the domain where your images are hosted
    loader: 'default',
    // Specify a remote pattern to match the paths of your images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/public/**', // Adjust this path according to your image paths
      },
    ],
  },
};

module.exports = nextConfig;