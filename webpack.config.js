const GoogleFontsPlugin = require("google-fonts-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js",   //shows the webpack where our app starts

  output: {
    filename: "boundle.js"  // where the webpack should store the output
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
