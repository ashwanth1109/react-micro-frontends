const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8080/",
      filename: "[name].[hash].js",
    },
    devServer: {
      port: 8080,
      historyApiFallback: {
        index: "index.html",
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify("development"),
        APP_PACKAGE: JSON.stringify("container"),
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
