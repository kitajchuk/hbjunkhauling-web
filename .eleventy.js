const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPassthroughCopy({ "src/public/favicon*": "." });
  eleventyConfig.addPassthroughCopy({ "src/public/icon*.png": "." });
  eleventyConfig.addPassthroughCopy({ "src/public/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "src/public/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/public/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/public/manifest.json": "manifest.json" });

  return {
    dir: {
      input: "src",
    },
  };
};