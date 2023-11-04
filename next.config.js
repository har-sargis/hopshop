/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "storage.googleapis.com",
      "upload.wikimedia.org",
      "download.logo.wine",
      "freepnglogos.com",
      "static.vecteezy.com",
      "vectorkhazana.com",
      "1000marche.net",
      "s3-eu-west-1.amazonaws.com",
      "i.pinimg.com",
      "preview.thenewsmarket.com",
      "tradebyte.com",
      "cdn.shopify.com",
      "penelopechilvers.com",
      "criteo.com",
      "res.cloudinary.com",
      "logos-world.net",
      "1000logos.net",
      "evi.com",
      "1000logos.net",
      "w7.pngwing.com",
    ],
  },
  transpilePackages: ["lucide-react"],
};

module.exports = nextConfig;
