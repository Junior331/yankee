import styled, { css } from "styled-components";
import { View, TouchableOpacity } from "react-native";

import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";

export const Container = styled(View)<StyledProps>`
  left: 10px;
  top: 30px;
  z-index: 2;
  width: 100%;
  height: auto;
  flex-direction: row;
  position: absolute;
  justify-content: space-between;
  ${({ isSecondary }) =>
    isSecondary &&
    css`
      align-items: flex-end;
    `};
`;
export const Button = styled(TouchableOpacity)<StyledProps>`
  width: 80px;
  align-items: center;
  flex-direction: row;

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      width: 50px;
      justify-content: flex-end;
    `};
`;
export const Text = styled(TextComponent)`
  font-size: 16px;
  font-weight: 500;
`;
