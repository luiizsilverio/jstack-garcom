import { FlatList, Modal } from 'react-native';
import { IProduct } from '../../types/Product';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import * as S from './styles';

interface Props {
  visible: boolean;
  product: IProduct | null;
  onClose(): void;
  onAddToCart: (product: IProduct) => void;
}

export function ProductModal({ visible, product, onClose, onAddToCart }: Props) {

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  if (!product) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <S.Image
        source={{ uri: `http://${process.env.API_URL}/uploads/${product.imagePath}`}}
      >
        <S.CloseBtn onPress={onClose}>
          <Close />
        </S.CloseBtn>
      </S.Image>

      <S.Body>
        <S.Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </S.Header>

        <S.IngredientsContainer>
          {
            product.ingredients?.length > 0 && (
              <Text weight="600" color="#666">Ingredientes</Text>
            )
          }

          <FlatList
            data={product.ingredients}
            keyExtractor={(ingredient) => ingredient._id}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 16 }}
            renderItem={({ item: ingredient }) => (
              <S.Ingredient>
                <Text>{ingredient.icon}</Text>
                <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                  {ingredient.name}
                </Text>
              </S.Ingredient>
            )}
          />

        </S.IngredientsContainer>
      </S.Body>

      <S.Footer>
        <S.FooterContainer>
          <S.PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              R$ {product.price.toFixed(2)}
            </Text>
          </S.PriceContainer>

          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </S.FooterContainer>
      </S.Footer>

    </Modal>
  )
}
