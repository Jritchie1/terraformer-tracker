
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'jritchie1',
  applicationName: 'terraformer-tracker',
  appUid: 'db5zCfSMXCJ9cMsxL3',
  orgUid: '28d79675-a99c-446c-98aa-ef7ceedf1744',
  deploymentUid: 'e38fa86e-e812-4b6c-a7c5-399782926be4',
  serviceName: 'terraformer-tracker',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.2',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'terraformer-tracker-dev-main', timeout: 6 };

try {
  const userHandler = require('./src/handlers/main.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}