import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import * as S from './styles';

interface Props {
  visible: boolean;
  onClose(): void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: Props) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <S.Overlay behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <S.Content>
          <S.Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color="#666"/>
            </TouchableOpacity>
          </S.Header>

          <S.Form>
            <S.Input
              placeholder='Número da mesa'
              placeholderTextColor="#666"
              keyboardType='number-pad'
              onChangeText={setTable}
            />

            <Button
              onPress={handleSave}
              disabled={table.length === 0}
            >
              Salvar
            </Button>
          </S.Form>
        </S.Content>
      </S.Overlay>
    </Modal>
  )
}
