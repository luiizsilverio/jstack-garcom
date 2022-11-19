import { useState } from "react";
import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TableModal } from "../../components/TableModal";
import { products } from "../../mocks/products";
import { ICartItem } from "../../types/CartItem";
import * as S from './styles';

export function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selTable, setSelTable] = useState('');
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  // const [cartItems, setCartItems] = useState<ICartItem[]>([
  //   {
  //     quantity: 1,
  //     product: products[0]
  //   },
  //   {
  //     quantity: 2,
  //     product: products[1]
  //   },
  //   {
  //     quantity: 3,
  //     product: products[2]
  //   },
  //   {
  //     quantity: 1,
  //     product: products[3]
  //   },
  // ]);

  function handleSaveTable(table: string) {
    setSelTable(table);
  }

  function handleCancelOrder() {
    setSelTable('');
  }

  return (
    <>
      <S.Container>
        <Header selectedTable={selTable} onCancel={handleCancelOrder} />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
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
