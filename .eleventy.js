module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: "./_site/*.css",
	});

	eleventyConfig.addPassthroughCopy("hero.png");
};
