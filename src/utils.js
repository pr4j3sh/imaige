const { API_KEY } = require("./config");

async function imaige(
  prompt,
  width = "1216",
  height = "832",
  generator = "hd",
  preference = "classic",
) {
  try {
    if (!prompt) throw new Error("please provide a valid prompt");

    const res = await fetch("https://api.deepai.org/api/text2img", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        text: prompt,
        width,
        height,
        image_generator_version: generator,
        genius_preference: preference,
      }),
    });

    const data = await res.json();
    if (!data.output_url) {
      throw new Error("invalid response");
    }
    return data.output_url;
  } catch (error) {
    return error.message;
  }
}

module.exports = { imaige };
