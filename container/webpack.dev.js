const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

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
      new ModuleFederationPlugin({
        name: "container",
        remotes: {
          landing: "landing@http://localhost:8081/remoteEntry.js",
        },
        shared: packageJson.dependencies,
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
