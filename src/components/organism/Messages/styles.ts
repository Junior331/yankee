import styled, { css } from "styled-components";
import {  ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Text as TextComponent } from "@/components/elements";
import { StyledProps } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";

import {
  Title as TitleComponent,
} from "@/components/elements";

export const ContainerList = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false, // Esconde a barra de rolagem
})`
  width: 100%;
  margin-top: 20px;
  background-color: red;
`;

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const Container = styled(View)`
  width: 100%;
  min-height: 50px;
  overflow: hidden;
  border-radius: 23px;
  align-items: center;
  justify-content: space-between;
  overflow: scroll;
`;

export const ContainerTabs = styled(View)`
  width: 100%;
  height: auto;
  margin: 20px 0;
  align-items: center;
`;
export const Tabs = styled(View)`
  gap: 20px;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Tab = styled(TouchableOpacity)``;

export const Text = styled(TextComponent)<StyledProps>`
  font-size: 10px;
  color: ${({ color }) => color || "#4d4c4c"};

  ${({ tabs }) =>
    tabs &&
    css`
      font-size: 13px;
      font-weight: 500;
      font-family: "Poppins-Medium";
    `};
`;

export const ContainerInput = styled(View)`
  flex-direction: row;
  align-items: center; 
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 0 0 0 15px;
  width: 100%; 
  height: 36px;
  margin-top: 10px;
`;
export const SearchIcon = styled(Ionicons)`
  margin-right: 10px;
`;

export const StyledInput = styled(TextInput).attrs({
  placeholderTextColor: "#999",
})`
  flex: 1 0 auto;
  font-size: 14px;
  color: #333;
  height: 100%;
`;

export const ButtonFollow = styled(View)`
  gap: 3px;
  width: 58px;
  height: 18px;
  background: #fff;
  padding: 2px 6px;
  margin-right: 5px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const ContainerUser = styled(View)`
  gap: 5px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAvatar = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  background-color: #c4c4c4;
`;
export const ContainerBadge = styled(View)`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled(View)`
  left: 25px;
  width: 10px;
  height: 10px;
  bottom: -2px;
  position: absolute;
  border-radius: 15px;
  padding-bottom: 2px;
  align-items: center;
  justify-content: center;
  background-color: #16e30b;
`;
export const BadgeBlue = styled(View)`
  width: 12px;
  height: 12px;
  margin: 0 10px 0 10px;
  border-radius: 15px;
  padding-bottom: 2px;
  align-items: center;
  justify-content: center;
  background-color: #1976d2;
`;
export const ContainerText = styled(View)`
  flex: 1;
`;
export const Title = styled(TitleComponent)`
  margin: 0 0 4px 0;
  color: #f2f2f2;
  font-size: 12px;
  font-weight: 500;
  font-family: "Poppins-Medium";
  text-overflow: ellipsis;
  
`;