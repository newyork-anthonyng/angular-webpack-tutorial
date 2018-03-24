const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "app"),

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "app"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: "raw-loader",
        test: /\.html$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};
