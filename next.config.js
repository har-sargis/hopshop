/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "placeimg.com", "placekitten.com", "www.placecage.com", "picsum.photos"],
  },
  transpilePackages: ["lucide-react"],
};

module.exports = nextConfig;
