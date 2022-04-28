"use strict";

const expansions = require("../data/collections/expansions.json");

const startup = async (event) => {
  return {
    statusCode: 200,
    body: expansions
  };
};

module.exports = {
  handler: startup
}