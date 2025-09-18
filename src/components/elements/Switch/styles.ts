import styled from "styled-components";
import { TouchableOpacity, Text as ReactText } from "react-native";
import { StyledProps } from "@/utils/types";

export const Container = styled(TouchableOpacity) `
  gap: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Text = styled(ReactText)<StyledProps>`
  flex: 1;
  font-size: 12px;
  font-weight: 300;
  color: ${({ color }) => color || "#ffffff"};
`;
