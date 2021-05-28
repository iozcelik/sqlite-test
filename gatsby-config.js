module.exports = {
  siteMetadata: {
    title: "Sqlite Test",
  },
  plugins: [{
    resolve: "gatsby-plugin-ts-loader",
    options: {
      tslint: true // false or exclude to disable tslint
    }
  }],
};
