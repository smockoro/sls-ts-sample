import { DefaultOrderUsecase } from '../../../src/domain/usecase/defaultOrderUsecase';
import { OrderRepository } from '../../../src/domain/repository/orderRepository';

class TestRepository implements OrderRepository {
  deleteCanceledOrder(orderId: string): string {
    if (orderId === undefined || orderId === null) {
      throw new Error('orderId is undefined or null');
    }
    return orderId;
  }
}

test('delete order', () => {
  const repository = new TestRepository();
  const usecase = new DefaultOrderUsecase(repository);
  const deleteOrderId = '1';
  let expOrderId: string;
  try {
    expOrderId = usecase.deleteCanceledOrder(deleteOrderId);
  } finally {
    expect(expOrderId).toBe(deleteOrderId);
  }
});

test('delete NG by null order', () => {
  const repository = new TestRepository();
  const usecase = new DefaultOrderUsecase(repository);
  const deleteOrderId = null;
  expect(() => {
    usecase.deleteCanceledOrder(deleteOrderId);
  }).toThrowError('orderId is undefined or null');
});