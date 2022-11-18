import { Text } from '../Text';
import * as S from './styles';

interface Props {
  children: string;
  onPress(): void;
  disabled?: boolean;
}

export function Button({ children, disabled = false, onPress }: Props) {
  return (
    <S.Container disabled={disabled} onPress={onPress}>
      <Text weight="600" color="#fff">{children}</Text>
    </S.Container>
  )
}
