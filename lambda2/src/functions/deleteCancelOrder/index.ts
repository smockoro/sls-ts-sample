import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      sqs: 'arn:aws:sqs:ap-northeast-1:123456789012:queue/sqs-queue-name',
    },
  ],
};
