import { KeyboardEvent, useEffect, useMemo } from "react";
import * as S from "./styles"
import closeIcon from '../../assets/images/close-icon.svg';
import { IOrder, TStatus } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  visible: boolean;
  order: IOrder | null;
  isLoading: boolean;
  onClose(): void;
  onCancelOrder(): Promise<void>;
  onChangeStatus: () => void;
}

export function OrderModal(props: Props) {
  const { visible, order, isLoading, onClose, onCancelOrder, onChangeStatus } = props;

  if (!visible || !order) return null;

  const total = useMemo(() => (
    order.products.reduce((acc, item) => (
      acc + (item.product.price * item.quantity)
    ), 0)
  ), [order])


  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown',handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);


  return (
    <S.Overlay>
      <S.Modal>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Fechar modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && '🕒'}
              {order.status === "IN_PRODUCTION" && '👨‍🍳'}
              {order.status === "DONE" && '✅'}
            </span>
            <strong>
              {order.status === "WAITING" && 'Fila de espera'}
              {order.status === "IN_PRODUCTION" && 'Em preparação'}
              {order.status === "DONE" && 'Pronto'}
            </strong>
          </div>
        </div>

        <S.Details>
          <strong>Itens</strong>
          <div className="order-items">
            {
              order.products.map(({ _id, product, quantity }) => (
                <div className="item" key={_id}>
                  <img
                    src={`http://localhost:3000/uploads/${product.imagePath}`}
                    alt={product.name}
                  />
                  <span className="quantity">{quantity}x</span>
                  <div className="prod-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>

        </S.Details>

        <S.Actions>
          {
            order.status !== 'DONE' && (
              <button
                type="button"
                className="primary"
                disabled={isLoading}
                onClick={onChangeStatus}
              >
                <span>
                  {order.status === 'WAITING' && '👨‍🍳'}
                  {order.status === 'IN_PRODUCTION' && '✅'}
                </span>
                <strong>
                  {order.status === 'WAITING' && 'Iniciar Produção'}
                  {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                </strong>
              </button>
            )
          }

          <button
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            Cancelar Pedido
          </button>
        </S.Actions>
      </S.Modal>
    </S.Overlay>
  )
}
