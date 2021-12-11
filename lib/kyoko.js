const fetch = require("node-fetch");

/**
 * @param {string} endpoint An endpoint contained in {@link https://api.rei.my.id/v2/endpoint}
 * @returns {Promise}
 */
async function parseResponse(response) {
  if (!response.ok) {
    throw new Error("Endpoint not found! Please check your endpoint.\n Please visit ");
  }

  return response.json();
}
async function Kyoko(endpoint) {
  return await fetch("https://api.rei.my.id/v2/" + endpoint).then(parseResponse);
}

module.exports = { Kyoko };
