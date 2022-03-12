import {
  Context,
  DynamoDBStreamEvent,
  DynamoDBStreamHandler,
} from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger();

const productDynamoStreamProducer: DynamoDBStreamHandler = async (
  event: DynamoDBStreamEvent,
  context: Context
) => {
  logger.addContext(context);
  logger.info('Received event:', event);
};

export const main = productDynamoStreamProducer;
