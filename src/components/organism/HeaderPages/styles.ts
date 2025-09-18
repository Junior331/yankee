import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";

import {
  Text as TextComponent,
  Title as Titleomponent,
} from "@/components/elements";
import { StyledProps } from "@/utils/types";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: start;
  flex-direction: row;
  justify-content: start;
`;
export const Container = styled(View)<StyledProps>`
  width: 100%;
  height: auto;
  z-index: 20;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: ${({ padding }) => padding || '0'};
`;

export const ContainerUser = styled(View)`
  gap: 38px;
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
  width: 14px;
  height: 14px;
  bottom: -5px;
  position: absolute;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  border: 1px solid #faf9f9;
  background-color: #1976d2;
`;

export const ContainerAvatar = styled(View)`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 60px;
  background-color: #c4c4c4;
`;

export const Text = styled(TextComponent)<StyledProps>`
  font-size: ${({ fontSize }) => fontSize || "7px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`;

export const Title = styled(Titleomponent)`
  flex: 1 0 auto;
  text-align: center;
`;

export const IconContainer = styled(View)`
  width: auto;
  height: auto;
  min-width: 18px;
  min-height: 18px;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 38px;
`;

export const ContainerFilter = styled(ViewGeneric)<StyledProps>`
  top: 30px;
  left: 0px;
  overflow: hidden;
  position: absolute;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: width 3s ease;
  border: 1px solid #dcdada;
  width: ${({ width }) => width || "110px"};
  height: ${({ height }) => height || "auto"};
  background-color: ${({ theme }: any) => theme.colors.background};
  z-index: 1;
`;
export const OptionFilter = styled(TouchableOpacity)`
  gap: 20px;
  width: 100%;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;
export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: #dadada;
`;

export const UserMenu = styled(View)`
  top: 50px;
  right: 0px;
  width: 200px;
  overflow: hidden;
  position: absolute;
  border-radius: 8px;
  border: 1px solid #404040;
  background-color: ${({ theme }: any) => theme.colors.background};
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 8px;
  elevation: 5;
  z-index: 999;
`;

export const UserMenuOption = styled(TouchableOpacity)`
  padding: 11px;
  align-items: center;
  justify-content: center;
`;

export const MenuDivider = styled(View)`
  height: 1px;
  width: 100%;
  background-color: #404040;
`;
