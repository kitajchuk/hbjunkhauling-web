import "dotenv/config";
import CleanCSS from "clean-css";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "." });

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src",
    },
  };
}
