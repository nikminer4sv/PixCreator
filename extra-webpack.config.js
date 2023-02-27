const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (config) => {
  console.log(config);

  if (config.mode !== "development") {
    config.plugins.push(new CompressionPlugin());
  }

  return config;
}
