import { Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === 'android';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseBtn = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  margin-top: 12px;
`;

export const Body = styled.View`
  background-color: #fafafa;
  flex: 1;
  padding: 32px 24px 0;
`;

export const Header = styled.View`
`;

export const IngredientsContainer = styled.View`
  margin-top: 32px;
  flex: 1;
`;

export const Ingredient = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(204, 204, 204, .3);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 4px;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #fff;
  padding: 16px 24px ${isAndroid ? '0px' : '16px'} 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.SafeAreaView`
`;
