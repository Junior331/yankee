import styled from "styled-components";
import { View, Text as TextReact } from "react-native";

import Colors from "@/constants/Colors";

export const Container = styled(View)`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${Colors.dark.background};
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px;
`;

export const Text = styled(TextReact)`
  color: ${Colors.dark.text};
  font-size: 14px;
`;

export const DropTopContainer = styled(View)`
  display: flex;
  position: absolute;
  top: -20px;
  left: 70px;
`;

export const DropBottom1Container = styled(View)`
  display: flex;
  position: absolute;
  bottom: -50px;
  left: -50px;
`;

export const DropBottom2Container = styled(View)`
  display: flex;
  position: absolute;
  bottom: -102px;
  right: -50px;
`;

export const DropBottom3Container = styled(View)`
  display: flex;
  position: absolute;
  bottom: 75px;
  left: 80;
`;
