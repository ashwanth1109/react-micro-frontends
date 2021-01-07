const webpack = require("webpack");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: "./src/index",
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
        BUILD_MODE: JSON.stringify("development"),
        APP_PACKAGE: JSON.stringify("container"),
      }),
    ],
  };
};
