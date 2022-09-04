module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });

  return {
    dir: {
      input: "src",
    },
  };
};