const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const prodConfig = {
    mode: "production",
    output: {
      publicPath: "/",
      filename: "[name].[hash].js",
    },
    plugins: [
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify("production"),
        APP_PACKAGE: JSON.stringify("container"),
      }),
    ],
  };

  return merge(commonConfig, prodConfig);
};
