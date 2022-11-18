import styled from 'styled-components/native';
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === 'android';

export const Category = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  background-color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 8px 2px 1px rgba(0, 0, 0, ${isAndroid ? .5 : .1});
  elevation: 2;
`;
