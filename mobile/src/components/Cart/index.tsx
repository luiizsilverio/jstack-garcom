import { FlatList, TouchableOpacity } from "react-native";
import { useState, useMemo } from 'react';
import { ICartItem } from "../../types/CartItem";
import { IProduct } from "../../types/Product";
import { Button } from "../Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import * as S from './styles';
import { ConfirmOrderModal } from "../ConfirmOrderModal";

interface Props {
  cartItems: ICartItem[]
  onAdd: (product: IProduct) => void;
  onRemove: (product: IProduct) => void;
  onConfirm(): void;
}

export function Cart({ cartItems, onAdd, onRemove, onConfirm }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = useMemo(() => (
    cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.quantity * cartItem.product.price);
    }, 0)
  ), [cartItems]);


  function handleConfirmOrder() {
    setModalVisible(true);
  }


  function handleOk() {
    onConfirm();
    setModalVisible(false);
  }


  return (
    <>
      <ConfirmOrderModal
        visible={modalVisible}
        onClose={handleOk}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 140 }}
          renderItem={({ item }) => (
            <S.ItemContainer>
              <S.ProductContainer>
                <S.Image
                  source={{ uri: `http://192.168.100.2:3000/uploads/${item.product.imagePath}`}}
                />

                <S.QuantityContainer>
                  <Text size={14} color="#666">{item.quantity}x</Text>
                </S.QuantityContainer>

                <S.ProductDetails>
                  <Text size={14} weight="600">{item.product.name}</Text>
                  <Text size={14} color="#666" style={{marginTop: 4}}>
                    R$ {item.product.price.toFixed(2)}
                  </Text>
                </S.ProductDetails>
              </S.ProductContainer>

              <S.Actions>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => onAdd(item.product)}
                >
                  <PlusCircle  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onRemove(item.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </S.Actions>
            </S.ItemContainer>
          )}
        />
      )}

      <S.Summary>
        <S.TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">R$ {total.toFixed(2)}</Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </S.TotalContainer>

        <Button
          disabled={cartItems.length === 0}
          onPress={handleConfirmOrder}
          loading={isLoading}
        >
          Confirmar pedido
        </Button>
      </S.Summary>
    </>
  )
}
