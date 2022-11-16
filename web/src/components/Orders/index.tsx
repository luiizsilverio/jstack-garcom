import * as S from './styles';

export function Orders() {
  return (
    <S.Container>
      <S.Board>
        <header>
          <span>🕒</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <S.Content>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </S.Content>
      </S.Board>

      <S.Board>
        <header>
          <span>🕒</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <S.Content>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </S.Content>
      </S.Board>

      <S.Board>
        <header>
          <span>🕒</span>
          <strong>Fila de espera</strong>
          <span>(1)</span>
        </header>

        <S.Content>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
          <button type="button">
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </S.Content>
      </S.Board>
    </S.Container>
  )
}
