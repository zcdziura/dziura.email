module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/*.css",
  });

  eleventyConfig.addPassthroughCopy("./fonts/*.woff2");
  eleventyConfig.addPassthroughCopy("hero.webp");
  eleventyConfig.addPassthroughCopy("index.js");
};
