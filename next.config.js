// next.config.js
const withTypescript = require('@zeit/next-typescript')
const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = withTypescript({
  distDir: "_next",
  webpack: async config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    const envFileName = process.env.NODE_ENV === "production" ? ".env" : ".env.develop";

    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, envFileName),
        systemvars: true
      })
    );

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
})
