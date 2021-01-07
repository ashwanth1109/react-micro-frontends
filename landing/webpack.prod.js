const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const prodConfig = {
    mode: "production",
    output: {
      publicPath: "/landing/",
      filename: "[name].[hash].js",
    },
  };

  return merge(commonConfig, prodConfig);
};
