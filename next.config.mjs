/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.pixabay.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "pixsector.com",
      },
    ],
  },
};

export default nextConfig;
