import { useState } from "react";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TableModal } from "../../components/TableModal";
import { ICartItem } from "../../types/CartItem";
import { IProduct } from "../../types/Product";
import * as S from './styles';

export function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selTable, setSelTable] = useState('');
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelTable(table);
  }

  function handleCancelOrder() {
    setSelTable('');
  }

  function handleAddToCart(product: IProduct) {
    if (!selTable) {
      setModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(item => item.product._id === product._id);

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      }

      return newCartItems;
    })
  }

  return (
    <>
      <S.Container>
        <Header selectedTable={selTable} onCancel={handleCancelOrder} />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </S.MenuContainer>

      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          {
            selTable
              ? (
                <Cart cartItems={cartItems} />
              )
              : (
                <Button onPress={() => setModalVisible(true)}>
                  Novo Pedido
                </Button>
              )
          }
        </S.FooterContainer>
      </S.Footer>

      <TableModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  )
}
