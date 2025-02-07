import { View } from "react-native";
import styled from "styled-components";

import { StyledProps } from "@/utils/types";

export const GridContainer = styled(View)<StyledProps>`
  gap: 3px;
  width: 100%;
  flex-direction: row;
`;

export const RightColumn = styled(View)<StyledProps>`
  flex: 1;
  gap: 3px;
`;

export const StyledGridItem = styled(View)<StyledProps>`
  flex: 1 0 5px;
  overflow: hidden;
  border-radius: 8px;
  height: ${({ isLarge, isSingle, largeImageHeight, smallImageHeight }) =>
    isSingle || isLarge ? largeImageHeight : smallImageHeight};
  width: ${({ isLarge, isSingle }) => {
    if (isSingle) return "100%";
    return isLarge ? "48%" : "100%";
  }};
`;
