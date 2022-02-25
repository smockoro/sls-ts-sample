import { Callback, Context, S3Event } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';

const logger = new Logger();

const fileChangePropagator = async (
  event: S3Event,
  context: Context,
  callback: Callback
) => {
  logger.addContext(context);
  logger.info('start s3 file get');
  const s3Record = event.Records[0].s3;
  const srcBucket = s3Record.bucket.name;

  logger.info('file get from ' + srcBucket);

  const fileExtension = decodeURIComponent(
    s3Record.object.key.replace(/\+/g, ' ')
  );
  const extMatch = fileExtension.match(/\.([^.]*)$/);
  if (!extMatch) {
    callback(new Error('Could not determine file extension.'));
    return;
  }

  // TODO:Download and produce to Kafka

  logger.info('end of s3 file get');
};

export const main = fileChangePropagator;
