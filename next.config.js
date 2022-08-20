/** @type {import('next').NextConfig} */

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: '_next',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    } else {
      return `${new Date().getTime()}`;
    }
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) config.resolve.fallback.fs = false;

    const envFileName = process.env.NODE_ENV === 'production' ? '.env' : '.env.develop';

    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, envFileName),
        systemvars: true,
      }),
    );

    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
