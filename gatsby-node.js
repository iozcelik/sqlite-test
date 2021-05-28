exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        entry: "../src/pages/index.js",
        module: {
          rules: [
            {
              exclude: /node_modules/,
            },
          ],
        },
        resolve: {
          extensions: [".tsx", ".ts", ".js"],
        },
        output: {
          filename: "bundle.js",
        },
        devServer: {
          publicPath: "/public",
        },
    })
  }