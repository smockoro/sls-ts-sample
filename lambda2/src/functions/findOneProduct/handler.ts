import { middyfy } from '@libs/lambda';
import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Credentials, DynamoDB } from 'aws-sdk';

const logger = new Logger();

const findOneProduct: ValidatedEventAPIGatewayProxyEvent<
  typeof Object
> = async (_event, context: Context) => {
  logger.addContext(context);

  // TODO: switch for envVal.
  const credentials = new Credentials({
    accessKeyId: 'dummy',
    secretAccessKey: 'dummy',
    sessionToken: null,
  });

  // TODO: switch for envVal.
  const dynamoDbClient = new DynamoDB.DocumentClient({
    region: 'ap-northeast-1',
    endpoint: 'http://localhost:8000',
    credentials,
  });

  const params = {
    TableName: 'products',
    Key: {
      id: {
        HASH: '1',
      },
    },
  };

  try {
    const result = await dynamoDbClient.get(params).promise();
    return formatJSONResponse({
      item: result.Item,
    });
  } catch (err) {
    logger.error(err.message);
    throw new Error(`Internal Server Error : ${err}`);
  }
};

export const main = middyfy(findOneProduct);
