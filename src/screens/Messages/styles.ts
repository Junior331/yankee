import { Ionicons } from "@expo/vector-icons";
import styled, { css } from "styled-components";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";
import { Title as TitleComponent } from "@/components/elements";

export const Container = styled(View)<StyledProps>`
  width: 100%;
  flex: 1;
  background-color: ${({ bg_color }) => bg_color};
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

export const Tab = styled(TouchableOpacity)``;

export const Text = styled(TextComponent)<StyledProps>`
  font-size: 10px;
  color: ${({ color }) => color || "#FFFFFF"};

  ${({ tabs }) =>
    tabs &&
    css`
      font-size: 13px;
      font-weight: 500;
      font-family: "Poppins-Medium";
    `};
`;

export const ContainerInput = styled(View)`
  width: 100%;
  height: 36px;
  overflow: hidden;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  padding: 0 0 0 15px;
  background-color: #f5f5f5;
`;

export const StyledInput = styled(TextInput).attrs({
  placeholderTextColor: "#2D2D2D",
})`
  color: #333;
  height: 100%;
  flex: 1 0 auto;
  font-size: 14px;
`;

export const SearchIcon = styled(Ionicons)`
  margin-right: 10px;
`;

export const ContainerList = styled(ScrollView)`
  width: 100%;
  margin-top: 20px;
`;

export const ContainerMessage = styled(View)`
  width: 100%;
  min-height: 50px;
  border-radius: 23px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerUser = styled(View)`
  flex: 1;
  gap: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerAvatar = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  background-color: #c4c4c4;
`;

export const ContainerBadge = styled(View)`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled(View)`
  left: 25px;
  width: 10px;
  height: 10px;
  bottom: -2px;
  position: absolute;
  border-radius: 15px;
  padding-bottom: 2px;
  align-items: center;
  justify-content: center;
  background-color: #16e30b;
`;

export const ContainerText = styled(View)`
  flex: 1;
`;

export const Title = styled(TitleComponent)<StyledProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ color }) => color || "#ffffff"};
  margin: 0 0 4px 0;
  text-overflow: ellipsis;
  font-family: "Poppins-Medium";
`;

export const BadgeBlue = styled(View)`
  width: 18px;
  height: 18px;
  border-radius: 9px;
  align-items: center;
  margin: 4px 10px 0 10px;
  justify-content: center;
  background-color: #1976d2;
  shadow-color: #1976d2;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 3;
`;

export const TimeContainer = styled(View)`
  align-items: flex-end;
  justify-content: center;
  min-width: 40px;
`;

export const EmptyStateContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const UnreadBadge = styled(View)`
  background-color: #ff4444;
  border-radius: 10px;
  min-width: 20px;
  height: 16px;
  padding: 0 6px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const UnreadText = styled(Text)`
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  font-family: "Poppins-SemiBold";
`;
