module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/*.css",
  });

  eleventyConfig.addPassthroughCopy("Cahuenga-Regular.woff2");
  eleventyConfig.addPassthroughCopy("hero.webp");
  eleventyConfig.addPassthroughCopy("index.js");
};
