const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = () => {
  const devConfig = {
    mode: "development",
    output: {
      publicPath: "http://localhost:8081/",
      filename: "[name].[contenthash].js",
    },
    devServer: {
      port: 8081,
      historyApiFallback: {
        index: "index.html",
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "landing",
        filename: "remoteEntry.js",
        exposes: {
          "./LandingModule": "./src/bootstrap",
        },
        shared: packageJson.dependencies,
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
