const fetch = require("node-fetch");

async function parseResponse(response) {
  if (!response.ok) {
    throw new Error(
      "Endpoint not found! check your endpoint. Please visit https://github.com/Eilaluth/Kyoko For More Information"
    );
  }

  return response.json();
}
/**
 * @param {string} endpoint An endpoint contained in {@link https://api.rei.my.id/v2/endpoint}
 * @returns {Promise}
 */
async function Kyoko(endpoint) {
  return await fetch("https://api.rei.my.id/v2/" + endpoint).then(
    parseResponse
  );
}

module.exports = Kyoko;
