import { View } from "react-native";
import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
  Button as ButtonComponent,
} from "@/components/elements";
import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";

export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || Colors.dark.text};
`;
export const MessageError = styled(TextComponent)<StyledProps>`
  width: 100%;
  text-align: start;
  color: ${Colors.dark.error};
`;

export const ContainerInput = styled(View)`
  gap: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextModal = styled(Text)<StyledProps>`
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled(TitleComponent)<StyledProps>`
  width: 100%;
  text-align: center;
  color: ${({ color }) => color || Colors.dark.textMessage};
`;
export const Button = styled(ButtonComponent)``;

export const Page = styled(View)`
  align-items: center;
  justify-content: center;
`;










