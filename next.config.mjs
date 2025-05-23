/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configure static generation
  distDir: 'out',
  // Handle trailing slashes
  trailingSlash: true,
};

export default nextConfig; 