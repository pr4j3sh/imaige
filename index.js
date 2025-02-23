#!/usr/bin/env node

const { argv } = require("node:process");
const { imaige, downloadImage } = require("./src/utils");

const { program } = require("commander");

program.name("imaige").description("generate images using ai");

program
  .argument("<prompt>", "text prompt for generating image(in quotes)")
  .option(
    "-s, --size <widthxheight>",
    "image width and height(for standard images 1024x576, 1024x720, 512x512, 768x1024, 576x1024, for hd images 1216x832, 1152x896, 1024x1024, 896x1152, 832x1216)",
    "1216x832",
  )
  .option(
    "-g, --generator <generator>",
    "image generator(either 'standard', 'hd', or 'genius')",
    "hd",
  )
  .option(
    "-p, --preference <preference>",
    "'genius' generator preferences(either 'classic', 'anime', 'photography', 'graphic', or 'cinematic')",
    "classic",
  )
  .action((prompt, options) => {
    const size = options.size.split("x");
    const width = size[0];
    const height = size[1];

    imaige(prompt, width, height, options.generator, options.preference)
      .then((res) => {
        downloadImage(res)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  });

program
  .command("help")
  .description("show help information")
  .action(() => {
    program.help();
  });

program.parse(argv);

module.exports = {
  imaige,
};
