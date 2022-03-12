interface OrderRepository {
  deleteCanceledOrder(orderId: string): string;
}

export { OrderRepository };
