import { middyfy } from '@libs/lambda';
import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEvent,
} from '@libs/api-gateway';
import { Context } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { Credentials, DynamoDB } from 'aws-sdk';

const logger = new Logger();

const findProducts: ValidatedEventAPIGatewayProxyEvent<typeof Object> = async (
  _event,
  context: Context
) => {
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

  const parames = {
    TableName: 'products',
  };

  try {
    const result = await dynamoDbClient.scan(parames).promise();
    return formatJSONResponse({
      totalCount: result.Count,
      items: result.Items,
      // TODO: paging
    });
  } catch (err) {
    logger.error(err.message);
    throw new Error(`Internal Server Error : ${err}`);
  }
};

export const main = middyfy(findProducts);
