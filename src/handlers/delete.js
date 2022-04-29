"use strict";

const AWS = require('aws-sdk');

const deleteExpansions = async (event) => {

  const dynamodb = new AWS.DynamoDB.DocumentClient();

  let expansions;

  try {
    const results = await dynamodb.scan({ TableName: "TestTable" }).promise();
    expansions = results.Items;
    /*expansions.forEach(async (item) => {
        let params = {
            TableName: "TestTable",
            Key: {
                HashKey: item.id,
                NumberRangeKey: 1
            }
        }
        console.log(params);
        try {
            await dynamodb.delete(params).promise();
            console.log("Delete");
        }
        catch (error) {
            console.log(error);
        }
    })*/
  }
  catch (error) {
    console.log(error);
  }

  const params = {
    RequestItems: {
      "TestTable": [

      ]
    }
  };

  expansions.forEach(item => {
    let newItem = {
      DeleteRequest: {
        Key: {
          id: item.id
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
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: "Database cleared"
  };
};

module.exports = {
  expansions: deleteExpansions
}