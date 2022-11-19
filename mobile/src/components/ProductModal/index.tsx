import { Modal } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

interface Props {
  visible: boolean;
}

export function ProductModal({ visible }: Props) {
  return (
    <Modal visible={visible}>
      <Text>ProductModal</Text>
    </Modal>
  )
}
