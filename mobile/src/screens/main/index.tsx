import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { Button } from "../../components/Button";
import { Cart } from "../../components/Cart";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TableModal } from "../../components/TableModal";
import { Empty } from "../../components/Icons/Empty";
import { Text } from "../../components/Text";
import * as S from './styles';

// import { products as mockProducts} from "../../mocks/products";
// import { categories as mockCategories } from "../../mocks/categories";
import { ICategory } from "../../types/Category";
import { ICartItem } from "../../types/CartItem";
import { IProduct } from "../../types/Product";
import { api } from "../../utils/api";

export function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selTable, setSelTable] = useState('');
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);


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


  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId
      ? '/products'
      : `/categories/${categoryId}/products`;

    setLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);
    setLoadingProducts(false);
  }


  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      api.get('categories'),
      api.get('products')
    ])
    .then((response) => {
      setCategories(response[0].data);
      setProducts(response[1].data);
      setIsLoading(false);
    })
  }, []);


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
                  <Categories
                    categories={categories}
                    onSelect={handleSelectCategory}
                  />
                </S.CategoriesContainer>

                {
                  products.length > 0 ? (
                    <S.MenuContainer>
                      <Menu
                        onAddToCart={handleAddToCart}
                        products={products}
                      />
                    </S.MenuContainer>

                  ) : (

                    <S.CenterContainer>
                      <Empty />
                      <Text  color="#666" style={{ marginTop: 24 }}>
                        Nenhum produto foi encontrado!
                      </Text>
                    </S.CenterContainer>
                  )
              }
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
                  selectedTable={selTable}
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
