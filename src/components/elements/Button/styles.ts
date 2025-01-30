import styled from "styled-components";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text, TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)<StyledProps>`
  padding: 6px 0px;
  border-radius: 32px;
  width: ${({ width }) => width || "220px"};
  height: ${({ height }) => height || "35px"};
  background-color: ${Colors.dark.bottomColor};
`;
export const TitleButton = styled(Text)`
  font-size: 16px;
  text-align: center;
  color: ${Colors.dark.text};
  font-family: "Poppins-Regular";
`;
