import sharp from "sharp";
import shell from "shelljs";

// Source images in local `data` directory -- ignored
const shellCmd = `find ${process.cwd()}/public/images -type f`;
const shellOpts = { silent: true };

// Viable local source image formats
const rImage = /\.(png|jpg|jpeg)$/;

// Shell out to `find` for quick recurse
const files = shell
  .exec(shellCmd, shellOpts)
  .stdout.split("\n")
  .filter((f) => rImage.test(f));

// Process each file for upload to Prismic
files.forEach(async (file) => {
  // This is the file we will write as `webp` version
  const outFile = file.replace(rImage, ".webp");

  await sharp(file).toFile(outFile);
  console.log(`Making file: ${outFile}`);
});
