import styled from "styled-components";
import { View, Animated } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";

export const Container = styled(View)`
  flex: 1 0 auto;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Content = styled(Animated.View)<StyledProps>`
  padding: 16px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${Colors.dark.background};
`;