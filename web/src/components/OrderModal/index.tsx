import * as S from "./styles"
import closeIcon from '../../assets/images/close-icon.svg';
import { IOrder } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  visible: boolean;
  order: IOrder | null;
}

export function OrderModal({ visible, order }: Props) {

  if (!visible || !order) return null;

  return (
    <S.Overlay>
      <S.Modal>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button type="button">
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
        </S.Details>
      </S.Modal>
    </S.Overlay>
  )
}
