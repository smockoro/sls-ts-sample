import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import fileChangePropagator from '@functions/fileChangePropagator';

const serverlessConfiguration: AWS = {
  service: 'sls-sample',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    // 'serverless-plugin-typescript',
    'serverless-s3-local',
    'serverless-dynamodb-local',
    'serverless-offline',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { hello, fileChangePropagator },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb: {
      stages: ['dev'],
      start: {
        inMemory: true,
        migrate: true,
        seed: true,
      },
      seed: {
        development: {
          sources: [
            {
              table: 'products',
              sources: ['./local-dynamodb/products.json'],
            },
          ],
        },
      },
    },
  },
  resources: {
    Resources: {
      products: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'products',
          AttributeDefinitions: [
            {
              AttributeName: 'email',
              AttributeType: 'S',
            },
          ],
          KeySchema: [
            {
              AttributeName: 'email',
              KeyType: 'HASH',
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
