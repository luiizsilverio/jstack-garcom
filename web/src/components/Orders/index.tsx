import { useEffect, useState } from 'react';
import { IOrder } from '../../types/Order';
import { api } from '../../utils/api';
import { Board } from '../Board';
import * as S from './styles';

const ordersMock: IOrder[] = [
  {
    "_id": "637411eb234c8b31fcd96766",
    "table": "123",
    "status": "DONE",
    "products": [
      {
        "product": {
          "name": "Pizza 4 queijos",
          "imagePath": "1668544290613-quatro-queijos.png",
          "price": 40,
        },
        "quantity": 1,
        "_id": "637411eb234c8b31fcd96767"
      },
      {
        "product": {
          "name": "Coca-cola",
          "imagePath": "1668544997194-coca-cola.png",
          "price": 7,
        },
        "quantity": 2,
        "_id": "637411eb234c8b31fcd96768"
      }
    ],
  },
  {
    "_id": "637418cd769d3bceb5092e67",
    "table": "4",
    "status": "WAITING",
    "products": [
      {
        "product": {
          "name": "Coca-cola",
          "imagePath": "1668544997194-coca-cola.png",
          "price": 7,
        },
        "quantity": 1,
        "_id": "637418cd769d3bceb5092e68"
      }
    ],
  }
]

export function Orders() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    api.get('orders')
      .then((response) => setOrders(response.data));
  }, [])

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  const waiting = orders.filter(order => order.status === 'WAITING');
  const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION');
  const done = orders.filter(order => order.status === 'DONE');

  return (
    <S.Container>
      <Board
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrder}
      />
      <Board
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
        onCancelOrder={handleCancelOrder}
      />
      <Board
        icon="✅"
        title="Pronto"
        orders={done}
        onCancelOrder={handleCancelOrder}
      />

    </S.Container>
  )
}
