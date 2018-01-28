const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, "app/client.js"),
  clientOutput: path.resolve(CURRENT_WORKING_DIR, "public"),
  serverEntry: path.resolve(CURRENT_WORKING_DIR, "server/index.js"),
  serverOutput: path.resolve(CURRENT_WORKING_DIR, "build")
};
