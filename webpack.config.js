var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js"
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    port: 9000,

    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules:
      [
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              },
            },
          ],
        },

        {
          test: /\.css$/,

          use: [


            MiniCssExtractPlugin.loader,

            'css-loader'
          ]
        },

      /*  {

          test: /\.(png|svg|jpe?g|gif)$/,

          use: [

            {

              loader: "file-loader",

              options: {

                name: '[name].[ext]',

                outputPath: "images",

              }

            }

          ]

        }*/
      ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", //  فقط  index  و ليس index.html  هنا يجب كتابة اسم الملف مع الامتداد أي
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({ filename: "css/style.css" }),

    new OptimizeCssAssetsPlugin({}),
  ],


};