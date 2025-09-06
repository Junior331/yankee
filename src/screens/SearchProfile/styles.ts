import styled, { css } from "styled-components";
import { TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Title as TitleComponent } from "@/components/elements";
import { Text as TextComponent } from "@/components/elements";

export const Container = styled(View)<StyledProps>`
  width: 100%;
  height: 100%;
  padding: 15px 0 0 0;
   background-color: ${({ bg_color }) => bg_color};
`;

export const ContainerUser = styled(View)`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerProfiles = styled(View)`
  width: 100%;
`;

export const ContainerAvatar = styled(View)`
  width: 40px;
  height: 40px;
  border-radius: 60px;
  background-color: #c4c4c4;
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

export const ButtonFollow = styled(View)<StyledProps>`
  gap: 3px;
  width: 60px;
  height: 20px;
  background: transparent;
  padding: 2px 6px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ color }) => color || "#FFFFFF"};
`;

export const IconAdd = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid #171717;
`;

export const UserContent = styled(View)`
  gap: 5px;
  width: 55%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RecentSearchesContainer = styled(View)`
  width: 100%;
  margin-bottom: 10px;
`;

export const RecentSearchesHeader = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const ContainerRecents = styled(View)<StyledProps>`
  border-radius: 10px;
  padding: 0 0 0 10px;
  background-color: ${({ color }) => color || "#FFFFFF"};

`;

export const RecentSearchesTitle = styled(TextComponent)<StyledProps>`
  font-size: 14px;
  font-weight: 500;
    color: ${({ color }) => color || "#ffffff"};
`;

export const DeleteAllButton = styled(TouchableOpacity)`
  padding: 5px;
`;

export const DeleteAllText = styled(TextComponent)`
  font-size: 12px;
  color: #E97070;
`;

export const RecentSearchItem = styled(View)`
  width: 99%;
  flex-direction: row;
  align-items: center;
`;

export const SearchRecent = styled(View)`
  gap: 10px;
  width: 93%;
  flex-direction: row;
  align-items: center;
`;

export const RecentSearchText = styled(TextComponent)<StyledProps>`
  font-size: 12px;
   color: ${({ color }) => color || "#ffffff"};
`;

export const DeleteButton = styled(TouchableOpacity)`
  padding: 5px;
`;

export const RecentSearchItemHorizontal = styled(View)`
  min-width: 140px;
  max-width: 200px;
  margin-right: 12px;
  flex-direction: row;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 8px 12px;
`;

export const SearchRecentHorizontal = styled(View)`
  gap: 8px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
