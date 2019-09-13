// next.config.js
const withTypescript = require('@zeit/next-typescript')
const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = withTypescript({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    );

    return config;
  }
})
