import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";

export const Container = styled(TouchableOpacity)`
  flex: 1 0 auto;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Content = styled(View)<StyledProps>`
  gap: 10px;
  height: auto;
  padding: 20px;
  min-height: 200px;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${Colors.dark.background};
`;
