import { useState } from "react";
import { Button } from "../../components/Button";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { TableModal } from "../../components/TableModal";
import * as S from './styles';

export function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selTable, setSelTable] = useState('');

  function handleSaveTable(table: string) {
    setSelTable(table);
  }

  function handleCancelOrder() {
    setSelTable('');
  }

  return (
    <>
      <S.Container>
        <Header selectedTable={selTable} onCancel={handleCancelOrder} />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>

      </S.Container>

      <S.Footer>
        <S.FooterContainer>
          {
            !selTable && (
              <Button onPress={() => setModalVisible(true)}>
                Novo Pedido
              </Button>
            )
          }
        </S.FooterContainer>
      </S.Footer>

      <TableModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  )
}
