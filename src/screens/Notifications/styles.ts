import styled, { css } from "styled-components";
import { ScrollView, View } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { removeScrollUi } from "@/utils/utils";
import { Text as TextComponent } from "@/components/elements";
import { Title as TitleComponent } from "@/components/elements";

export const Container = styled(View)<StyledProps>`
  width: 100%;
  flex: 1;
 background-color: ${({ bg_color }) => bg_color};
`;

export const HeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
`;

export const TestButtonContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled(View)`
  flex-direction: row;
  align-items: center;
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

export const TestButtonsContainer = styled(View)`
  padding: 20px;
  margin-top: 20px;
  align-items: center;
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

export const ContainerList = styled(ScrollView).attrs(removeScrollUi)`
  width: 100%;
  flex: 1;
  padding: 0 20px;
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
  background-color: ${({ bg_color }) => bg_color};
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
