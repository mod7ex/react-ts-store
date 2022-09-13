const { override, addWebpackResolve, adjustStyleLoaders } = require("customize-cra");
const path = require("path");

const additionalData = `@use "./src/assets/scss/_variables.scss"; 
                        @use "./src/assets/scss/_classes.scss"; 
                        @use "./src/assets/scss/_reset.scss"; 
                        @use "./src/assets/scss/_mixins.scss";`;

module.exports = override(
  addWebpackResolve({
    alias: {
      "@": path.resolve(__dirname, "./src/components"),
      "~": path.resolve(__dirname, "./src"),
    },
  }),

  adjustStyleLoaders((loader) => {
    // https://github.com/arackaf/customize-cra/blob/master/api.md#addlessloaderloaderoptions

    // loader.use[1].options.additionalData = additionalData;

    if (loader.use[4]) {
      // Only with Sass-Loaders
      loader.use[4].options.additionalData = additionalData;
    }
  })
);
