import { useState } from "react";
import { ActivityIndicator } from "react-native";
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
  const [isLoading, setIsLoading] = useState(false);

  function handleSaveTable(table: string) {
    setSelTable(table);
  }

  function handleResetOrder() {
    setSelTable('');
    setCartItems([]);
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


  function handleRemoveItem(product: IProduct) {

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(item => item.product._id === product._id);

      if (itemIndex < 0) return prevState;

      const newQtd = prevState[itemIndex].quantity - 1;
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (newQtd === 0) {
        newCartItems.splice(itemIndex, 1);

      } else {
        newCartItems[itemIndex] = {
          ...item,
          quantity: newQtd,
        }
      }

      return newCartItems;
    })
  }


  return (
    <>
      <S.Container>
        <Header selectedTable={selTable} onCancel={handleResetOrder} />
          {
            isLoading ? (
              <S.CenterContainer>
                <ActivityIndicator color="#ccc" size="large" />
              </S.CenterContainer>
            ) : (
              <>
                <S.CategoriesContainer>
                  <Categories />
                </S.CategoriesContainer>

                <S.MenuContainer>
                  <Menu onAddToCart={handleAddToCart} />
                </S.MenuContainer>
              </>
            )
          }

      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          {
            selTable
              ? (
                <Cart
                  cartItems={cartItems}
                  onAdd={handleAddToCart}
                  onRemove={handleRemoveItem}
                  onConfirm={handleResetOrder}
                />
              )
              : (
                <Button
                  onPress={() => setModalVisible(true)}
                  disabled={isLoading}
                >
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
