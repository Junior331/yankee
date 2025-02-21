import styled, { css } from "styled-components";
import { TextInput, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";
import { Title as TitleComponent } from "@/components/elements";
import { Text as TextComponent } from "@/components/elements";

import { Ionicons } from "@expo/vector-icons";
import { StyledProps } from "@/utils/types";

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${Colors.dark.background};
`;
export const ButtonIcon = styled(TouchableOpacity)`
  height: 20px;
`;
export const ContainerInput = styled(View)`
  width: 90%;
  height: 36px;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  padding: 0 0 0 10px;
  background-color: #f5f5f5;
`;
export const ContainerHeader = styled(View)`
  width: 100%;
  height: auto;
  gap: 15px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const SearchIcon = styled(Ionicons)`
  margin-right: 10px;
`;
export const StyledInput = styled(TextInput).attrs({
  placeholderTextColor: "#171717",
})`
  color: #171717;
  height: 100%;
  flex: 1 0 auto;
  font-size: 14px;
  margin-top: 3px;
`;

export const ContainerUser = styled(View)`
  padding: 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const containerProfiles = styled(View)`
  width: 100%;
  padding: 40px 0 0 0;
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

export const Title = styled(TitleComponent)`
  font-size: 12px;
  font-weight: 500;
  color: #f2f2f2;
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
export const ButtonFollow = styled(View)`
  gap: 3px;
  width: 60px;
  height: 20px;
  background: #fff;
  padding: 2px 6px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  margin-top: 20px;

`;

export const RecentSearchesHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  
`;
export const containerRecents = styled(View)`
  background-color:rgb(255, 255, 255);
  border-radius: 10px;
  padding: 0 0 0 10px;
`;

export const RecentSearchesTitle = styled(TextComponent)`
  font-size: 14px;
  font-weight: 500;
  color: #f2f2f2;
  
`;

export const DeleteAllButton = styled(TouchableOpacity)`
  padding: 5px;
`;

export const DeleteAllText = styled(TextComponent)`
  font-size: 12px;
  color:rgb(255, 255, 255);
`;

export const RecentSearchItem = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 99%;
`;
export const SearchRecent = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 93%;
  gap: 10px;
`;

export const RecentSearchText = styled(TextComponent)`
  font-size: 12px;
  color: #4D4C4C;
`;

export const DeleteButton = styled(TouchableOpacity)`
  padding: 5px;
`;