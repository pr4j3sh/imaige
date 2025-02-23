const { API_KEY } = require("./config");
const fs = require("fs");
const axios = require("axios");

async function imaige(
  prompt,
  width = "1216",
  height = "832",
  generator = "hd",
  preference = "classic",
) {
  try {
    if (!prompt) throw new Error("please provide a valid prompt");

    const res = await axios.post(
      "https://api.deepai.org/api/text2img",
      {
        text: prompt,
        width,
        height,
        image_generator_version: generator,
        genius_preference: preference,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY,
        },
      },
    );

    const data = res.data;
    if (!data.output_url) {
      throw new Error("invalid response");
    }
    return data.output_url;
  } catch (error) {
    return error.message;
  }
}

async function downloadImage(url) {
  try {
    const timestamp = Date.now();
    const filepath = `${timestamp}.jpg`;

    const response = await axios({
      url,
      responseType: "stream",
    });

    response.data.pipe(fs.createWriteStream(filepath));

    return new Promise((resolve, reject) => {
      response.data.on("end", () => resolve(`image saved as ${filepath}`));
      response.data.on("error", reject);
    });
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = { imaige, downloadImage };
