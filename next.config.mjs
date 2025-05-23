/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: '.next',
  cleanDistDir: true,
  poweredByHeader: false,
};

export default nextConfig; 