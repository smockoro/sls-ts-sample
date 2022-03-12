import { Context, MSKEvent, MSKHandler } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger();

const productEventKafkaConsumer: MSKHandler = async (
  event: MSKEvent,
  context: Context
) => {
  logger.addContext(context);
  logger.info('Received event:', event);
};

export const main = productEventKafkaConsumer;
