import styled from "styled-components";
import { View, Animated } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";

export const Container = styled(View)`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Content = styled(Animated.View)<StyledProps>`
  flex: 1;
  padding: 16px;
  max-height: 95%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${Colors.dark.background};
`;