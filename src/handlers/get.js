"use strict";

const AWS = require('aws-sdk');

const getExpansion = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  return {
    statusCode: 200,
    body: JSON.stringify(newExpansion)
  };
};

module.exports = {
  expansion: getExpansion
}