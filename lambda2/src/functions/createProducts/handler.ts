import { Logger } from '@aws-lambda-powertools/logger';
import { Context } from 'aws-lambda';
import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import schema from './schema';
import { Credentials, DynamoDB } from 'aws-sdk';

const logger = new Logger();

const createProducts: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event, context: Context) => {
  logger.addContext(context);

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

  const validateParams = {
    TableName: 'products',
    Key: {
      id: event.body.id,
    },
  };

  const params = {
    TableName: 'products',
    Item: {
      id: event.body.id,
      name: event.body.name,
      price: event.body.price,
      description: event.body.description,
      rating: event.body.rating,
      canOrder: event.body.canOrder,
      image: event.body.image,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    },
  };

  try {
    const validateRes = await dynamoDbClient.get(validateParams).promise();
    if (validateRes.Item) {
      logger.warn('Product already exists');
      throw new Error('Product already exists');
    }
  } catch (err) {
    logger.error(err);
    throw new Error(`Internal Server Error : ${err}`);
  }

  try {
    await dynamoDbClient.put(params).promise();
    return formatJSONResponse({
      message: 'Product created',
    });
  } catch (err) {
    logger.error(err.message);
    throw new Error(`Internal Server Error : ${err}`);
  }
};

export const main = middyfy(createProducts);
