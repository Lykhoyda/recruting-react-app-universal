const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const PATH = require("./path");

const config = {
  // Tell webpack the root file of our
  // server application
  entry: PATH.app,

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: PATH.clientOutput
  }
};

module.exports = merge(baseConfig, config);
