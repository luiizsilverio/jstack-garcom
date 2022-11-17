import { useState } from 'react';
import * as S from './styles';
import { IOrder } from '../../types/Order';
import { OrderModal } from '../OrderModal';

interface Props {
  icon: string;
  title: string;
  orders: IOrder[];
}

export function Board(props: Props) {
  const { icon, title, orders } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [selOrder, setSelOrder] = useState<IOrder | null>(null);

  function handleOpenModal(order: IOrder) {
    setModalVisible(true);
    setSelOrder(order);
  }

  function handleCloseModal() {
    setModalVisible(false);
    setSelOrder(null);
  }

  return (
    <S.BoardContainer>

      <OrderModal
        visible={modalVisible}
        order={selOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {
        orders.length > 0 &&
          <S.BoardContent>
            {
              orders.map(order => (
                <button
                  type="button"
                  key={order._id}
                  onClick={() => handleOpenModal(order)}
                >
                  <strong>Mesa {order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>
              ))
            }
          </S.BoardContent>
        }
      </S.BoardContainer>
  )
}
