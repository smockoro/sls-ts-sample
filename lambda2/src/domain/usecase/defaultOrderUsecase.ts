import { OrderUsecase } from './orderUsecase';
import { injectable, inject } from 'inversify';
import { OrderRepository } from '../repository/orderRepository';
import { TYPES } from '../../types';
import 'reflect-metadata';

@injectable()
class DefaultOrderUsecase implements OrderUsecase {
  private _orderRepository: OrderRepository;

  public constructor(
    @inject(TYPES.OrderRepository) orderRepository: OrderRepository
  ) {
    this._orderRepository = orderRepository;
  }

  public deleteCanceledOrder(orderId: string): string {
    return this._orderRepository.deleteCanceledOrder(orderId);
  }
}

export { DefaultOrderUsecase };
