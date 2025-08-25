import styled, { css } from "styled-components";
import { TextInput, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent, Title as TitleComponent } from "@/components/elements";

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

export const Content = styled(View)`
  width: 100%;
  flex: 1;
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
  padding: 0;
  border: 2px solid #1976d2;
`;

export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || "#4d4c4c"};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};

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
  position: relative;
  border-radius: 16px;
  align-items: center;
  background-color: blue;
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

export const Addevent = styled(TouchableOpacity)`
  width: 50px;
  right: 22px;
  height: 50px;
  bottom: 18px;
  position: absolute;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const FilterContainer = styled(View)`
  gap: 5px;
  top: 10px;
  left: 10px;
  width: 95%;
  height: auto;
  padding: 5px;
  min-height: 40px;
  position: absolute;
  align-items: start;
  flex-direction: row;
  margin-bottom: 20px;
  border-radius: 50px;
`;

export const FilterItem = styled(TouchableOpacity)`
  flex: 1;
  gap: 5px;
  flex-grow: 1;
  height: 20px;
  flex-shrink: 0;
  padding: 0 8px;
  border-radius: 5px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FilterText = styled(TextComponent)`
  color: #000;
  font-size: 9px;
  font-weight: 400;
`;

export const CardAddEvent = styled(View)`
  gap: 20px;
  width: 98%;
  margin: auto;
  border-radius: 15px;
  align-items: center;
  flex-direction: column;
  padding: 36px 26px 32px;
  background: ${Colors.dark.background};
`;

export const Header = styled(View)`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled(TitleComponent)`
  flex: 1;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  font-family: "Poppins-Regular";
`;

export const CardUploadImage = styled(View)`
  width: 100%;
  height: 115px;
  background: red;
  overflow: hidden;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  background: #ececec;
  justify-content: center;
`;

export const ContainerInput = styled(View)`
  width: 100%;
  flex-direction: column;
`;
export const InputContainer = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  flex-direction: column;
  margin: 10px 0 30px 0;
  background-color: #232323;
`;
export const ContentPost = styled(View)`
  width: 100%;
  margin: 30px 0 0;
  justify-content: flex-end;

`;

export const ContentInputUser = styled(View)`
  width: 100%;
  flex-direction: row;
`;

export const Input = styled(TextInput).attrs(() => ({
  placeholderTextColor: "#A5A4A4",
}))`
  color: #fff;
  width: 100%;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid #dcdada;
  background-color: transparent;
`;
export const InputPost = styled(TextInput)`
  flex: 1;
  height: 40px;
  margin: 0 10px;
  padding: 0 5px;
  color: #ffffff;
  background-color: transparent;
`;
export const ContentIconButton = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
   align-items: flex-end;
  padding: 0 10px 10px  ;
  gap: 10px;
`;
export const ButtonPost = styled(View)`
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

export const DatePickerContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DatePicker = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  align-items: center;
  border-radius: 10px;
  background-color: #808080;
`;

export const PostButton = styled(TouchableOpacity)`
  width: 85%;
  padding: 10px 0;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #007aff;
`;

export const PostButtonText = styled(Text)`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;
