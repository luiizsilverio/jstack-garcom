import { FlatList, TouchableOpacity } from "react-native";

import { products } from "../../mocks/products";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import * as S from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={(prod) => prod._id}
      style={{ marginTop: 24 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={() => <S.Divider />}
      renderItem={({ item: product }) => (
        <S.Product>
          <S.ProductImage
            source={{ uri: `http://192.168.100.2:3000/uploads/${product.imagePath}`}}
          />
          <S.ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666" style={{marginVertical: 8}}>
              {product.description}
            </Text>
            <Text size={14} weight="600">R$ {product.price.toFixed(2)}</Text>
          </S.ProductDetails>

          <S.AddToCartBtn>
            <PlusCircle />
          </S.AddToCartBtn>
        </S.Product>
      )}
    />
  )
}
