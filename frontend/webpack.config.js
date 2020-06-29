/* global __dirname, process */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

[
  "APP_NAME",
  "NODE_ENV",
  "SERVER_HOST",
].forEach(function(envVar) {
  const value = process.env[envVar];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Error! env var ${envVar} not provided.`);
  }
});

const exportsObject = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // Generates index.html
    new HtmlWebpackPlugin({
      title: process.env.APP_NAME,
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      // Use interpolation to make value a JS string
      "APP_NAME": `"${process.env.APP_NAME}"`,
      "SERVER_HOST": `"${process.env.SERVER_HOST}"`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.ts$/i,
        exclude: [
          /node_modules/,
        ],
        use: "ts-loader",
      },
      //{
      //  test: /\.js$/i,
      //  exclude: /node_modules/,
      //  use: "babel-loader",
      //},
    ],
  },
  // Teach webpack how to resolve module imports
  // https://webpack.js.org/configuration/resolve/#root
  resolve: {
    extensions: [ ".ts" ],
  }
};

if (process.env.NODE_ENV === "development") {
  console.log("inlining source maps...");
  exportsObject["devtool"] = "inline-source-map";
}

module.exports = exportsObject;
