import styled from "styled-components";
import { TextInput, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";

export const Container = styled(View)`
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: 1.5px solid ${Colors.dark.borderColor};
`;

export const InputContent = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor:
    theme === "dark" ? Colors.dark.placeholder : Colors.light.placeholder,
}))`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 15px;
  color: ${Colors.dark.text};
  background-color: transparent;
`;
export const InputIcon = styled(View)`
  padding-left: 22px;
`;
export const ToggleVisibilityButton = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
  justify-content: center;
  align-items: center;
  color: white;
`;
