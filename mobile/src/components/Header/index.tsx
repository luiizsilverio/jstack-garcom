import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

interface Props {
  selectedTable: string;
  onCancel(): void;
}

export function Header({ selectedTable, onCancel }: Props) {

  if (!selectedTable) {
    return (
      <S.Container>
        <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
          <Text size={24} weight="600">
            WAITER
          <Text size={24}>APP</Text>
        </Text>
      </S.Container>
    )
  } else {
    return (
      <S.Container>
        <S.Content>
          <S.OrderHeader>
            <Text size={24} weight="600">Pedido</Text>
            <TouchableOpacity onPress={onCancel}>
              <Text color="#d73035" weight="600" size={14}>
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </S.OrderHeader>

          <S.Table>
            <Text color="#666">Mesa {selectedTable}</Text>
          </S.Table>
        </S.Content>
      </S.Container>
    )
  }
}
