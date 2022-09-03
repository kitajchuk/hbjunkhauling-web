module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("src");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
};