import { IOrder } from '../../types/Order';
import { Board } from '../Board';
import * as S from './styles';

const orders: IOrder[] = [
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
  return (
    <S.Container>
      <Board
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <Board
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <Board
        icon="✅"
        title="Pronto"
        orders={[]}
      />

    </S.Container>
  )
}
