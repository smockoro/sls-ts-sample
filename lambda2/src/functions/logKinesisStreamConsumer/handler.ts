import { Context, KinesisStreamEvent, KinesisStreamHandler } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger();

const logKinesisStreamConsumer: KinesisStreamHandler = async (
  event: KinesisStreamEvent,
  context: Context
) => {
  logger.addContext(context);
  logger.info('Received event:', event);
};

export const main = logKinesisStreamConsumer;
