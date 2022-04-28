"use strict";

const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const expansions = require("../data/collections/expansions.json");

const addExpansion = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const params = {
    RequestItems: {
      "TestTable": [

      ]
    }
  };

  expansions.forEach(expansion => {
    const id = v4();
    let newItem = {
      PutRequest: {
        Item: {
          id,
          expansion
        }
      }
    };
    params.RequestItems.TestTable.push(newItem);
  })

  await dynamodb.batchWrite(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(params)
  };
};

module.exports = {
  expansion: addExpansion
}