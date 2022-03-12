interface OrderUsecase {
  deleteCanceledOrder(orderId: string): string;
}

export { OrderUsecase };
