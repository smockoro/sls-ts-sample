import { OrderRepository } from '../domain/repository/orderRepository';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import * as mysql from 'mysql';
import { TYPES } from '../types';
import { DatabaseConfig } from '../mysql.config';

@injectable()
class MySQLOrderRepository implements OrderRepository {
  private _connection: mysql.Connection;

  constructor(@inject(TYPES.DatabaseConfig) databaseConfig: DatabaseConfig) {
    this._connection = mysql.createConnection({
      host: databaseConfig.host,
      user: databaseConfig.user,
      password: databaseConfig.password,
      database: databaseConfig.database,
    });
  }

  public deleteCanceledOrder(orderId: string): string {
    this._connection.connect();
    this._connection.query(
      `DELETE FROM orders WHERE id = ${orderId}`,
      (error) => {
        if (error) {
          throw error;
        }
      }
    );
    this._connection.end();
    return orderId;
  }
}

export { MySQLOrderRepository };
