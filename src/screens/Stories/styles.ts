import styled, { css } from "styled-components";
import { TouchableOpacity, View, TextInput,  ImageBackground as ImageBackgroundReact, } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";
import { Title as TitleComponent } from "@/components/elements";



export const Container = styled(View)`
  flex: 1;
  gap: 10px;
  padding: 0px 15px 10px;
  background-color: ${Colors.dark.background};
`;

export const ContainerHeader = styled(View)`
  gap: 10px;
  width: 99%;
  flex-direction: row;
  align-items: center;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  height: 20px;
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

export const Title = styled(TitleComponent)`
  color:#ffffff;
  font-size: 12px;
  font-weight: 500;
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

export const Footer = styled(View)`
  gap: 20px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
`;

export const InputContainer = styled(View)`
flex: 1;
  padding: 0px 15px;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
  border: 1.5px solid #ffffff;
  background-color: transparent;
`;

export const AttachmentButton = styled(View)`
  gap: 5px;
  flex-direction: row;
`;

export const Input = styled(TextInput)`
  flex: 1;
  height: 40px;
  margin: 0 10px;
  padding: 0 10px;
  color: #ffffff;
  background-color: transparent;
`;

export const ButtonFollow = styled(View)`
  gap: 3px;
  width: 70px;
  height: 20px;
  background: #fff;
  margin-right: 5px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StoryContent = styled(View)`
  padding: 10px;
  flex: 1 0 auto;
`;

export const ProgressContainer = styled(View)`
  gap: 2px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const ProgressBar = styled(TouchableOpacity)`
  height: 4px;
  flex: 1 0 auto;
  cursor: pointer;
  overflow: hidden;
  border-radius: 1px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const Progress = styled(View)`
  height: 100%;
  background-color: #ffffff;
`;

export const ImageBackground = styled(ImageBackgroundReact)`
   flex: 1;
   width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  border-radius: 24px;
  background-color: #c4c4c4
`;



