interface IProduct {
  _id: string;
  quantity: number;
  product: {
    name: string;
    imagePath: string;
    price: number;
  }
}

export interface IOrder {
  _id: string;
  table: string;
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE';
  products: IProduct[]
}
