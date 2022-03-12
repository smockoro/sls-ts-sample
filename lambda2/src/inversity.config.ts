import { Container } from 'inversify';
// @ts-ignore
import { TYPES } from './types';
import { OrderRepository } from './domain/repository/orderRepository';
import { OrderUsecase } from './domain/usecase/orderUsecase';
import { DefaultOrderUsecase } from './domain/usecase/defaultOrderUsecase';
import { MySQLOrderRepository } from './store/mysqlOrderRepository';
import { DatabaseConfig } from './mysql.config';

const container = new Container();
container.bind<OrderRepository>(TYPES.OrderRepository).to(MySQLOrderRepository);
container.bind<OrderUsecase>(TYPES.OrderUsecase).to(DefaultOrderUsecase);
container.bind<DatabaseConfig>(TYPES.DatabaseConfig).toConstantValue({
  // TODO: read from env and default value.
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'example',
  database: 'order',
});

export { container };
