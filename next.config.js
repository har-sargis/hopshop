/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
  transpilePackages: ["lucide-react"],
};

module.exports = nextConfig;
