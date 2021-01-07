const webpack = require("webpack");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8081/",
      filename: "[name].[hash].js",
    },
    devServer: {
      port: 8081,
      historyApiFallback: {
        index: "index.html",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify("development"),
        APP_PACKAGE: JSON.stringify("landing"),
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
