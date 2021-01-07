const webpack = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    mode: "production",
    entry: "./src/index",
    output: {
      publicPath: "/",
      filename: "[name].[hash].js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.DefinePlugin({
        BUILD_MODE: JSON.stringify("production"),
        APP_PACKAGE: JSON.stringify("container"),
      }),
    ],
  };
};
