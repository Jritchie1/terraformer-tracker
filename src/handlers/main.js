"use strict";

const startup = async (event) => {
  return {
    statusCode: 200,
    body: "Test"
  };
};

module.exports = {
  handler: startup
}