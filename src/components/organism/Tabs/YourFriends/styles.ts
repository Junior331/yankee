import styled, { css } from "styled-components";
import { TouchableOpacity, View } from "react-native";

import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";

export const ContainerNotions = styled(View)`
  padding: 0 10px;
  margin-bottom: 110px;
`;

export const Tabs = styled(View)`
  gap: 20px;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Tab = styled(TouchableOpacity)``;

export const ButtonFollow = styled(View)`
  gap: 3px;
  width: 58px;
  height: 18px;
  padding: 2px 6px;
  margin-right: 5px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background: transparent;
  justify-content: center;
  border: 1px solid #FFFFFF;
`;

export const FooterCardPost = styled(View)`
  width: 100%;
  padding-right: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerInteractions = styled(View)`
  gap: 10px;
  width: auto;
  align-items: center;
  flex-direction: row;
`;

export const ContainerIcon = styled(TouchableOpacity)`
  width: auto;
  gap: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled(TextComponent)<StyledProps>`
  font-size: 10px;
  color: ${({ color }) => color || "#4d4c4c"};

  ${({ tabs }) =>
    tabs &&
    css`
      font-size: 13px;
      font-weight: 500;
      font-family: "Poppins-Medium";
    `};
`;

