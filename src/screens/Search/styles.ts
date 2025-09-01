import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { TextInput } from "react-native";

import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export const ContainerInput = styled(View)`
  flex: 1; 
  flex-grow: 1;
  height: 36px;
  overflow: hidden;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  padding: 0 0 0 10px;
  background-color: #232323;
`;

export const SearchIcon = styled(Ionicons)`
  margin-right: 10px;
`;

export const StyledInput = styled(TextInput).attrs({
  placeholderTextColor: Colors.dark.text,
})`
  height: 100%;
  flex: 1 0 auto;
  font-size: 14px;
  margin-top: 3px;
  color: ${Colors.dark.text};
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

export const ContainerHeader = styled(View)`
  gap: 5px;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  padding: 0;
  height: 100%;
  margin: auto 0;
  margin-left: -5px;
  align-items: center;
  flex-direction: row;
`;