module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/*.css",
  });

  eleventyConfig.addPassthroughCopy("hero.webp");
  eleventyConfig.addPassthroughCopy("index.js");
  eleventyConfig.addPassthroughCopy("FantasqueSansMono-Regular.woff2");
};
