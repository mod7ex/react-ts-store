const { override, addWebpackResolve, adjustStyleLoaders } = require("customize-cra");
const path = require("path");

const additionalData = `@import "./src/assets/scss/_variables.scss";
                        @import "./src/assets/scss/_reset.scss";
                        @import "./src/assets/scss/_mixins.scss";
                        @import "./src/assets/scss/index.scss";`;

module.exports = override(
  addWebpackResolve({
    alias: {
      "@": path.resolve(__dirname, "./src/components"),
      "~": path.resolve(__dirname, "./src"),
    },
  }),

  adjustStyleLoaders((loader) => {
    // https://github.com/arackaf/customize-cra/blob/master/api.md#addlessloaderloaderoptions

    // loader.use[1].options.additionalData = `@import "./src/assets/scss/_variables.scss";`;

    if (loader.use[4]) {
      // Only with Sass-Loaders
      loader.use[4].options.additionalData = additionalData;
    }
  })
);
