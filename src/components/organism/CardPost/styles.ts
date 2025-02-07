import { View, TouchableOpacity as TouchableOpacityReact } from "react-native";
import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import { StyledProps } from "@/utils/types";

export const Container = styled(View)`
  gap: 20px;
  width: 100%;
  height: auto;
  position: relative;
  align-items: start;
  justify-content: start;
`;

export const ContainerUser = styled(View)`
  gap: 5px;
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerAvatar = styled(View)`
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 60px;
  background-color: #c4c4c4;
`;

export const Title = styled(TitleComponent)`
  font-size: 12px;
  font-weight: 500;
  font-family: "Poppins-Medium";
`;
export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || "#DCDADA"};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`;

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerText = styled(View)`
  flex-direction: column;
`;
export const TouchableOpacity = styled(TouchableOpacityReact)`
  display: flex;
  min-width: 20px;
  min-height: 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
