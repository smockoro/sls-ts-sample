import type { AWS } from '@serverless/typescript';

import hello from './src/functions/hello';
import fileChangePropagator from './src/functions/fileChangePropagator';
import createProducts from './src/functions/createProducts';
import findProducts from './src/functions/findProducts';
// import updateProducts from './src/functions/updateProducts';
// import deleteProducts from './src/functions/deleteProducts';
import findOneProduct from './src/functions/findOneProduct';
// import searchProducts from './src/functions/searchProducts';
import deleteCancelOrder from './src/functions/deleteCancelOrder';

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
  functions: {
    hello,
    fileChangePropagator,
    createProducts,
    findProducts,
    // updateProducts,
    // deleteProducts,
    findOneProduct,
    // searchProducts,
    deleteCancelOrder,
  },
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
              AttributeName: 'id',
              AttributeType: 'S',
            },
          ],
          KeySchema: [
            {
              AttributeName: 'id',
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
