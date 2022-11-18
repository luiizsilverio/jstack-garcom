import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
  background-color: rgba(0, 0, 0, .6);
  flex: 1;
  justify-content: center;
  padding: 0 24px;
`;

export const Content = styled.View`
  background-color: #fafafa;
  border-radius: 8px;
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border: 1px solid rgba(204, 204, 204, .5);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`;
