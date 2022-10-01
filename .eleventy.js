const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy({ "src/public/favicon*": "." });
  eleventyConfig.addPassthroughCopy({ "src/public/icon*.png": "." });
  eleventyConfig.addPassthroughCopy({ "src/public/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/public/manifest.json": "manifest.json" });

  return {
    dir: {
      input: "src",
    },
  };
};