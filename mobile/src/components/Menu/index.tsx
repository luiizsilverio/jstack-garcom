import { FlatList, TouchableOpacity } from "react-native";
import { useState } from 'react';

import { IProduct } from "../../types/Product";
import { products } from "../../mocks/products";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { Text } from "../Text";
import * as S from './styles';

interface Props {
  onAddToCart: (product: IProduct) => void;
}

export function Menu({ onAddToCart }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  function handleOpenModal(product: IProduct) {
    setModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={modalVisible}
        product={selectedProduct}
        onClose={() => setModalVisible(false)}
        onAddToCart={() => onAddToCart(selectedProduct)}
      />
      <FlatList
        data={products}
        keyExtractor={(prod) => prod._id}
        style={{ marginTop: 24 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={() => <S.Divider />}
        renderItem={({ item: product }) => (
          <S.Product onPress={() => handleOpenModal(product)}>
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

            <S.AddToCartBtn onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </S.AddToCartBtn>
          </S.Product>
        )}
      />
    </>
  )
}
