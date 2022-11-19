import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import * as S from './styles';

interface Props {
  children: string;
  onPress(): void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button(props: Props) {
  const { children, loading = false, disabled = false, onPress } = props;

  return (
    <S.Container
      disabled={disabled}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color="fff" />
      ) : (
        <Text weight="600" color="#fff">{children}</Text>
      )}
    </S.Container>
  )
}
