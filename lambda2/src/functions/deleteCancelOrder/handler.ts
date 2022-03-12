import { Context, SQSEvent, SQSHandler } from 'aws-lambda';
import { Logger } from '@aws-lambda-powertools/logger';
import { OrderUsecase } from '../../domain/usecase/orderUsecase';
import { container } from '../../inversity.config';
import { TYPES } from '../../types';

const logger = new Logger();

interface Task {
  orderId: string;
}

const deleteCancelOrder: SQSHandler = async (
  event: SQSEvent,
  context: Context
) => {
  logger.addContext(context);
  logger.info('Received event:', event);

  const task: Task = JSON.parse(event.Records[0].body);

  logger.info('task', task);

  const usecase: OrderUsecase = container.get<OrderUsecase>(TYPES.OrderUsecase);
  let id: string;
  try {
    id = usecase.deleteCanceledOrder(task.orderId);
  } catch (error) {
    logger.error(error);
  }
  logger.info('usecase', id);
};

export const main = deleteCancelOrder;
