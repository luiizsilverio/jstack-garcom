interface IProduct {
  _id: string;
  quantity: number;
  product: {
    name: string;
    imagePath: string;
    price: number;
  }
}

export type TStatus = 'WAITING' | 'IN_PRODUCTION' | 'DONE';

export interface IOrder {
  _id: string;
  table: string;
  status: TStatus;
  products: IProduct[]
}
