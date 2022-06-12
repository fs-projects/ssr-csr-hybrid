const path = require("path");

module.exports = {
  target: "node",
  entry: "./client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "./build/public",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node-modules/",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};
