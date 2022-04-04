const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports =
{
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/development.html",
      publicPath: "/",
    }),
  ],
  devServer: { port: 3000, historyApiFallback: { index: "/" } },
  devtool: 'source-map'
}