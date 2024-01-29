/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dummyjson.com", "cdn.dummyjson.com"],
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
