import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";

export const ViewGeneric = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${Colors.dark.background};
`;

export const Content = styled(View)`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
`;

export const Header = styled(ViewGeneric)`
  width: 100%;
  height: auto;
  justify-content: space-between;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  z-index: 10;
  padding: 5px;
  padding-left: 0;
  margin: 10px 10px;
  position: relative;
`;

export const ContainerBanner = styled(ViewGeneric)`
  width: 100%;
  height: 96px;
  overflow: hidden;
  position: absolute;
  background-color: #c4c4c4;
`;

export const ContainerAvatar = styled(ViewGeneric)`
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  border-radius: 60px;
  margin: -20px auto 10px;
  background-color: #c4c4c4;
`;

export const Text = styled(TextComponent)<StyledProps>`
  margin: 0 auto;
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
`;

export const Title = styled(TitleComponent)<StyledProps>`
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "18px"};
  font-weight: ${({ fontWeight }) => fontWeight || 700};
`;

export const ContainerInfo = styled(ViewGeneric)`
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;

export const ContainerLocation = styled(ViewGeneric)`
  gap: 5px;
`;

export const ContainerBigNumbers = styled(ViewGeneric)`
  gap: 5px;
  width: 100%;
`;

export const BigNumber = styled(ViewGeneric)`
  gap: 5px;
  flex: 1 0 119px;
  flex-direction: column;
`;

export const ContainerButton = styled(ViewGeneric)`
  gap: 10px;
  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
  gap: 3px;
  width: auto;
  height: 30px;
  min-width: 100px;
  background: #fff;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerTabs = styled(View)`
  width: 100%;
  height: auto;
  margin: 20px 0;
  align-items: center;
`;

export const Tabs = styled(View)`
  gap: 20px;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Tab = styled(TouchableOpacity)<StyledProps>`
  flex: 1 0 119px;
  position: relative;
  align-items: center;
  padding-bottom: 5px;
  font-weight: ${({ fontWeight }) => fontWeight || 600};
`;

export const Line = styled(View)<StyledProps>`
  bottom: 0;
  width: 20%; 
  height: 1px;
  border-radius: 2px;
  position: absolute;
  background-color: ${({ isActive }) => (isActive ? Colors.dark.text : "transparent")};
`;

export const TitleTab = styled(Title)<StyledProps>`
  font-family: "Poppins-Regular";
  font-weight: ${({ fontWeight }) => fontWeight || 600};
`;

export const ButtonEdit = styled(TouchableOpacity)`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
`;
