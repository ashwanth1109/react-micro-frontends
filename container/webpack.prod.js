const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  const prodConfig = {
    mode: "production",
    output: {
      publicPath: "/",
      filename: "[name].[hash].js",
    },
  };

  return merge(commonConfig, prodConfig);
};
