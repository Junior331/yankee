import styled from "styled-components";
import { View,TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";

export const Dropdown = styled(TouchableOpacity)`
  padding: 12px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  border: 1.5px solid ${Colors.dark.borderColor};
`;
export const Container = styled(View)`
  width: 100%;
`;

export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || Colors.dark.text};
`;

export const Option = styled(TouchableOpacity)`
  width: 100%;
  padding: 16px;
  margin: 8px 0;
  border-radius: 20px;
  border: 1.5px solid ${Colors.dark.borderColor};
`;
