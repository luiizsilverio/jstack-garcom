import { FlatList, TouchableOpacity } from "react-native";
import { ICartItem } from "../../types/CartItem";
import { Button } from "../Button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import * as S from './styles';

interface Props {
  cartItems: ICartItem[]
}

export function Cart({ cartItems }: Props) {
  return (
    <>
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
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <PlusCircle  />
                </TouchableOpacity>
                <TouchableOpacity>
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
              <Text size={20} weight="600">R$ {120.00}</Text>
            </>
          ) : (
            <Text color="#999">Seu carrinho está vazio</Text>
          )}
        </S.TotalContainer>

        <Button
          disabled={cartItems.length === 0}
          onPress={() => {}}
        >
          Confirmar pedido
        </Button>
      </S.Summary>
    </>
  )
}
