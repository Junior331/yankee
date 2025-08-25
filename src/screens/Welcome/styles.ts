import styled from "styled-components";
import { View } from "react-native";

import Colors from "@/constants/Colors";
import { Ellipse3 } from "@/assets/icons";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: start;
  background-color: ${Colors.dark.background};
`;

export const Header = styled(ViewGeneric)`
  margin: 24px;
`;

export const Content = styled(ViewGeneric)`
  gap: 45px;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
`;

export const Image = styled(Ellipse3)<StyledProps>`
  width: 100px;
  height: 60px;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  transform: ${({ transform }) => transform};
`;

export const ContainerAccount = styled(ViewGeneric)`
  gap: 10px;
`;

export const Line = styled(ViewGeneric)`
  height: 1px;
  width: 100%;
  max-width: 50px;
  background-color: ${Colors.dark.text};
`;

export const Text = styled(TextComponent)`
  width: 100%;
  font-size: 20px;
  max-width: 185px;
  text-align: center;
`;
