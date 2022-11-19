import { Modal } from "react-native";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import * as S from './styles';

interface Props {
  visible: boolean;
  onClose(): void;
}

export function ConfirmOrderModal({ visible, onClose }: Props) {
  return (
    <Modal visible={visible} animationType="fade">
      <S.Container>
        <CheckCircle />
        <Text color="#fff" size={20} weight="600" style={{marginTop: 12}}>
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{marginTop: 4}}>
          O pedido já entrou na fila de produção!
        </Text>

        <S.OkButton onPress={onClose}>
          <Text color="#d73035" weight="600">OK</Text>
        </S.OkButton>
      </S.Container>
    </Modal>
  )
}
