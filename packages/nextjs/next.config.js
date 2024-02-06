// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/cosmiccowboys",
        destination: "https://cosmiccowboys.cloud",
        permanent: false,
      },
      {
        source: "/pinatacloud",
        destination: "https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs",
        permanent: false,
      },
      {
        source: "/video",
        destination: "https://youtu.be/wUt5NjXHSO4",
        permanent: false,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;
