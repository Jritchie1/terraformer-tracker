"use strict";

const AWS = require('aws-sdk');

const deleteExpansions = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let expansions;

  try {
    const results = await dynamodb.scan({ TableName: "TestTable" }).promise();
    expansions = results.Items;
    expansions.forEach(item => {
        let params = {
            TableName: "TestTable",
            Key: {
                HashKey: item.id,
                NumberRangeKey: 1
            }
        }
        console.log(params);
        try {
            dynamodb.delete(params)
        }
        catch (error) {
            console.log(error);
        }
    })
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
  expansions: deleteExpansions
}