import { DefaultOrderUsecase } from '../../../src/domain/usecase/defaultOrderUsecase';
import { OrderRepository } from '../../../src/domain/repository/orderRepository';

class TestRepository implements OrderRepository {
  deleteCanceledOrder(orderId: string): string {
    return orderId;
  }
}

test("defaultOrderUsecase", () => {
  const repository = new TestRepository();
  const usecase = new DefaultOrderUsecase(repository);
  expect(usecase).toBeTruthy();
});