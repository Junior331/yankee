import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";

import {
  Text as TextComponent,
  Title as Titleomponent,
} from "@/components/elements";

export const Container = styled(View)`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerUser = styled(View)`
  gap: 20px;
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerBadge = styled(TouchableOpacity)`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled(View)`
  left: -3px;
  width: 15px;
  height: 15px;
  bottom: -5px;
  position: absolute;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border: 1px solid #faf9f9;
  background-color: #1976d2;
`;

export const ContainerAvatar = styled(View)`
  width: 31px;
  height: 31px;
  overflow: hidden;
  border-radius: 60px;
  background-color: #c4c4c4;
`;

export const Text = styled(TextComponent)`
  font-size: 7px;
`;

export const Title = styled(Titleomponent)`
  flex: 1 0 auto;
  text-align: center;
`;

export const IconContainer = styled(View)`
  width: auto;
  height: auto;
  min-width: 20px;
  min-height: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
`;
