/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   esmExternals: "loose", // <-- Mongoose
  //   serverComponentsExternalPackages: ["mongoose"], // <-- Mongoose
  // },
  // // enable top-level await support for Webpack
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
  images: {
    domains: ['res.cloudinary.com']
  }
};

module.exports = nextConfig;
