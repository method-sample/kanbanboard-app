module.exports =
{
  mode: "production",
  entry: "./src/index.ts",
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
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    clean: true,
    library: {
      name: "@methodjs/router",
      type: "commonjs",
    },
  },
  externals: {
    react: {
      "commonjs": "react"
    },
    "@methodjs/store": {
      "commonjs": "@methodjs/store"
    }
  }
}