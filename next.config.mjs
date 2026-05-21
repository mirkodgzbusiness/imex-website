/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imporexporperu.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shadcnstudio.com",
        pathname: "/ss-assets/**",
      },
    ],
  },
};

export default nextConfig;
