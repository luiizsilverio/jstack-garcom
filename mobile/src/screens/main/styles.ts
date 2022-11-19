import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === 'android';

// SafeAreaView só tem efeito no iOS
export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  height: 50px;
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #fff;
  padding: 16px 24px ${isAndroid ? '0px' : '16px'} 24px;
`;

export const FooterContainer = styled.SafeAreaView`
`;

export const CenterContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
