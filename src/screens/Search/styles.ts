import { View } from "react-native";
import styled from "styled-components";
import { TextInput } from "react-native";

import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export const ContainerInput = styled(View)`
  width: 100%;
  height: 36px;
  overflow: hidden;
  margin-bottom: 15px;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  padding: 0 0 0 10px;
  background-color: #f5f5f5;
`;

export const SearchIcon = styled(Ionicons)`
  margin-right: 10px;
`;

export const StyledInput = styled(TextInput).attrs({
  placeholderTextColor: Colors.dark.background,
})`
  height: 100%;
  flex: 1 0 auto;
  font-size: 14px;
  margin-top: 3px;
  color: ${Colors.dark.background};
`;

export const MasonryContainer = styled(View)`
  flex: 1;
  gap: 2px;
  flex-wrap: wrap;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MasonryItem = styled(View)`
  width: 48%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
`;
