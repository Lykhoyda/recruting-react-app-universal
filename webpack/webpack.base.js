module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["env", { targets: { browsers: ["last 2 versions"] } }],
            "es2015",
            "react",
            "stage-0",
            "flow"
          ]
        }
      }
    ]
  }
};