import styled from "styled-components/native";

export const Product = styled.TouchableOpacity`
  margin: 12px 24px;
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 96px;
  border-radius: 8px;
`;

export const ProductDetails = styled.View`
  margin-left: 16px;
  flex: 1;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 24px 0;
`;

export const AddToCartBtn = styled.TouchableOpacity`
  align-self: flex-end;
`;
