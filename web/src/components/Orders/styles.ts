import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  display: flex;
  gap: 32px;
`;

export const Board = styled.div`
  padding: 16px;
  border: 1px solid  rgba(204, 204, 204, .4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;

  button {
    background-color: #fff;
    border: 1px solid  rgba(204, 204, 204, .4);
    height: 128px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
