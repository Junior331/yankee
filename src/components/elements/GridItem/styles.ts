import { StyledProps } from "@/utils/types";
import { View } from "react-native";
import styled from "styled-components";


export const StyledGridItem = styled(View)<StyledProps>`
  flex: 1 0 5px;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(255, 255, 255, 0.8);
  height: ${({ isLarge, isSingle, }) =>
    isSingle || isLarge ? "200px" : "98px"};
  width: ${({ isLarge, isSingle }) => {
    if (isSingle) return "100%";
    return isLarge ? "48%" : "100%";
  }};
`;
