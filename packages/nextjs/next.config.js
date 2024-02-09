// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/speedrunEthereum",
        destination: "https://speedrunethereum.com",
        permanent: false,
      },
      {
        source: "/buidlGuidl",
        destination: "https://buidlguidl.com",
        permanent: false,
      },
      {
        source: "/bgGeneralChat",
        destination: "https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA",
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
