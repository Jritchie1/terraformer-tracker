"use strict";

const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const expansions = require("./data/collections/expansions.json");

const addExpansion = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { example } = JSON.parse(expansions[0]);
  const id = v4();

  console.log("ID: ", id)

  const newExpansion = {
    id,
    example,
    finished: false
  }

  await dynamodb.put({
    TableName: "TestTable",
    Item: newExpansion
  })

  return {
    statusCode: 200,
    body: JSON.stringify(newExpansion)
  };
};

module.exports = {
  expansion: addExpansion
}