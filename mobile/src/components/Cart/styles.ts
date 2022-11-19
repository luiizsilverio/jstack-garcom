import styled from 'styled-components/native';
import { Platform } from "react-native";

const isAndroid = Platform.OS === 'android';

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const ProductDetails = styled.View`
`;

export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
`;

export const TotalContainer = styled.View`
  margin-right: 32px;
  flex: 1;
`;
