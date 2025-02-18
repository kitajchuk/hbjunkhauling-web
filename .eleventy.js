require("dotenv").config();

const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  eleventyConfig.addPassthroughCopy({ public: "." });

  return {
    dir: {
      input: "src",
    },
  };
};
