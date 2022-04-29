"use strict";

const AWS = require('aws-sdk');

const getExpansions = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let expansions;

  try {
    const results = await dynamodb.scan({ TableName: "TestTable" }).promise();
    expansions = results.Items;
  }
  catch (error) {
    console.log(error);
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(expansions)
  };
};

module.exports = {
  expansions: getExpansions
}