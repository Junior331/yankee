import styled, { css } from "styled-components";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { StyledProps } from "@/utils/types";
import { removeScrollUi } from "@/utils/utils";
import { Text as TextComponent } from "@/components/elements";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  max-height: 100%;
  align-items: start;
  justify-content: start;
`;

export const Content = styled(ScrollView).attrs(removeScrollUi)`
  width: 100%;
  flex: 1 0 auto;
  position: relative;
`;

export const ListStorys = styled(ViewGeneric)`
  gap: 10px;
  width: 100%;
  flex-direction: row;
`;

export const ContainerStory = styled(TouchableOpacity)`
  gap: 5px;
  align-items: center;
`;

export const AddStory = styled(View)`
  width: 64px;
  height: 64px;
  padding: 2px;
  overflow: hidden;
  border-radius: 64px;
  align-items: center;
  justify-content: center;
  background-color: #c4c4c4;
`;

export const Story = styled(AddStory)`
  border: 2px solid #1976d2;
`;

export const Text = styled(TextComponent)<StyledProps>`
  font-size: 10px;
  color: ${({ color }) => color || "#4d4c4c"};

  ${({ tabs }) =>
    tabs &&
    css`
      font-size: 13px;
      font-weight: 500;
      font-family: "Poppins-Medium";
    `};
`;

export const ContainerMaps = styled(View)`
  width: 100%;
  height: 454px;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 16px;
  align-items: center;
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

export const ButtonFollow = styled(View)`
  gap: 3px;
  width: 58px;
  height: 18px;
  background: #fff;
  padding: 2px 6px;
  margin-right: 5px;
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

export const FooterCardPost = styled(View)`
  width: 100%;
  padding-right: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerInteractions = styled(View)`
  gap: 10px;
  width: auto;
  align-items: center;
  flex-direction: row;
`;

export const ContainerIcon = styled(TouchableOpacity)`
  width: auto;
  gap: 5px;
  flex-direction: row;
  align-items: center;
`;
