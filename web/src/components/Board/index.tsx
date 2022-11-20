import { useState } from 'react';
import { toast } from 'react-toastify'

import * as S from './styles';
import { IOrder, TStatus } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { api } from '../../utils/api';

interface Props {
  icon: string;
  title: string;
  orders: IOrder[];
  onCancelOrder: (orderId: string) => void;
  onChangeStatus: (orderId: string, status: TStatus) => void;
}

export function Board(props: Props) {
  const { icon, title, orders, onCancelOrder, onChangeStatus } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [selOrder, setSelOrder] = useState<IOrder | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: IOrder) {
    setModalVisible(true);
    setSelOrder(order);
  }

  function handleCloseModal() {
    setModalVisible(false);
    setSelOrder(null);
  }

  async function handleChangeStatus() {
    if (!selOrder) return;

    setIsLoading(true);

    const newStatus = selOrder.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selOrder._id}`, {
      status: newStatus
    });

    toast.success(`O pedido da mesa ${selOrder.table} foi atualizado`);
    onChangeStatus(selOrder._id, newStatus);
    setIsLoading(false);
    setModalVisible(false);

  }

  async function handleCancelOrder() {
    if (!selOrder) return;

    setIsLoading(true);

    await api.delete(`/orders/${selOrder._id}`);

    toast.success(`O pedido da mesa ${selOrder.table} foi cancelado!`);
    onCancelOrder(selOrder._id);
    setIsLoading(false);
    setModalVisible(false);
  }

  return (
    <S.BoardContainer>

      <OrderModal
        visible={modalVisible}
        order={selOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeStatus={handleChangeStatus}
        isLoading={isLoading}
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
