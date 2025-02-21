import styled, { css } from "styled-components";
import { View, TouchableOpacity } from "react-native";

import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";

export const Container = styled(View)<StyledProps>`
  width: 100%;
  height: auto;
  flex-direction: row;
  margin: 45px 15px 0 0;
  justify-content: space-between;
  ${({ isSecondary }) =>
    isSecondary &&
    css`
      align-items: flex-end;
    `};
`;
export const Button = styled(TouchableOpacity)<StyledProps>`
  width: 80px;
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
  font-weight: 400;
`;