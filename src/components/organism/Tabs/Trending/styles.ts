import { View } from "react-native";
import styled, { css } from "styled-components";

import { StyledProps } from "@/utils/types";
import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import Colors from "@/constants/Colors";

export const ContainerNotions = styled(View)`
  gap: 20px;
  padding: 0 10px;
  margin-bottom: 110px;
`;

export const Card = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Text = styled(TextComponent)<StyledProps>`
  font-size: 14px;
  color: ${({ color }) => color || "#9D9999"};

  ${({ tabs }) =>
    tabs &&
    css`
      font-size: 13px;
      font-weight: 500;
      font-family: "Poppins-Medium";
    `};
`;

export const ContainerText = styled(View)`
  flex-direction: column;
`;

export const Title = styled(TitleComponent)<StyledProps>`
  width: 100%;
  font-size: 14px;
  color: ${({ color }) => color || Colors.dark.text};
`;
