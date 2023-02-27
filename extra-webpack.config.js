const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const clc = require("cli-color");

module.exports = (config) => {
  console.log(clc.green("✔ ") + "Building using webpack complete")
  if (config.mode !== "development") {
    config.plugins.push(new CompressionPlugin());
    config.plugins.push(new TerserPlugin({
      terserOptions: {
        parse: {
          // We want terser to parse ecma 8 code. However, we don't want it
          // to apply minification steps that turns valid ecma 5 code
          // into invalid ecma 5 code. This is why the `compress` and `output`
          ecma: 8,
        },
        warnings: false,
        compress: {
          ecma: 5,
          inline: 2,
        },
        mangle: {
          // Find work around for Safari 10+
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
        }
      },
      parallel: true,
    }));
  }
  console.log(config)
  return config;
}
