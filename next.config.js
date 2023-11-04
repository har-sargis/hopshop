/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "download.logo.wine",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.freepnglogos.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.vectorkhazana.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1000marche.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3-eu-west-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "preview.thenewsmarket.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.tradebyte.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "penelopechilvers.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.criteo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1000logos.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.evi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "instagram.fevn2-1.fna.fbcdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
};

module.exports = nextConfig;
