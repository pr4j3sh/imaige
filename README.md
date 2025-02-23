# imaige

This is a javascript npm package for generating images using AI.

It provides both package scenarios:

- library
- binary

## Usage

### CLI Tool

- Install using `npm`

```bash
npm i -g @pr4j3sh/imaige
```

- Run using

```bash
imaige "a samurai cat in a burning village"
```

> use `imaige help` for more usage options

### Library

```js
const { imaige } = require("@pr4j3sh/imaige");

imaige("a samurai cat in a burning village")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

| argument   | type     | description                  | default |
| ---------- | -------- | ---------------------------- | ------- |
| prompt     | required | prompt for image generation  | -       |
| width      | optional | image width                  | 1216    |
| height     | optional | image height                 | 832     |
| generator  | optional | image generator              | hd      |
| preference | optional | genius generator preferences | classic |

- image width and height(for standard images 1024x576, 1024x720, 512x512, 768x1024, 576x1024, for hd images 1216x832, 1152x896, 1024x1024, 896x1152, 832x1216)
- image generator(either 'standard', 'hd', or 'genius')
- 'genius' generator preferences(either 'classic', 'anime', 'photography', 'graphic', or 'cinematic')

## Reference

- [DeepAI](https://deepai.org/docs#ai-image-generator)
- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)
