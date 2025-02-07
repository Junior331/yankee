
import { StyledProps } from "@/utils/types";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput, View } from "react-native";
import styled from "styled-components";

export const ContainerList = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false, // Esconde a barra de rolagem
})`
  flex: 1;
  width: 100%;
  margin-top: 20px;
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

export const MasonryContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
`;

export const MasonryItem = styled(View)<StyledProps>`
  width: 112px;
  height: 112px;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
`;

