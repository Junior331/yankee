import styled, { css } from "styled-components";
import { TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";
import { Text as TextComponent } from "@/components/elements";
import { Title as TitleComponent } from "@/components/elements";
import { StyledProps } from "@/utils/types";
import { BottomSheetView } from "@gorhom/bottom-sheet";

export const Container = styled(View)<StyledProps>`
  flex: 1;
  background-color: ${({ bg_color }) => bg_color};
`;

export const ContainerHeader = styled(View)`
  gap: 20px;
  width: 100%;
  padding: 15px 15px;
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

export const Title = styled(TitleComponent)<StyledProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${({ color }) => color || "#FFFFFF"};
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

export const ContainerIcons = styled(View)`
  gap: 15px;
  margin-right: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ChatContainer = styled(View)`
  flex: 1;
  padding: 10px 15px;
`;

export const MessageContainer = styled(View)<StyledProps>`
  margin-bottom: 10px;
  flex-direction: column;
  align-items: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
`;

export const MessageBubbleWrapper = styled(View)<StyledProps>`
  max-width: 80%;
  position: relative;
  margin: ${({ isSender }) => (isSender ? "0 0 0 10px" : "0 10px 0 0")};
`;

export const MessageBubble = styled(View)<StyledProps>`
  padding: 12px 16px;
  position: relative;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  background-color: ${({ isSender }) => (isSender ? "#0084FF" : "#ffffff")};
  border-top-left-radius: ${({ isSender }) => (isSender ? "18px" : "0px")};
  border-top-right-radius: ${({ isSender }) => (isSender ? "3px" : "18px")};
`;

export const MessageText = styled(TextComponent)<StyledProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ isSender }) => (isSender ? "#ffffff" : "#000000")};
`;

export const MessagePointer = styled(View)<StyledProps>`
  top: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  ${({ isSender }) =>
    isSender
      ? css`
          right: -10px;
          transform: rotate(45deg);
          background-color: #0084ff;
        `
      : css`
          left: -10px;
          transform: rotate(-45deg);
          background-color: #ffffff;
        `}
`;

export const TimeText = styled(TextComponent)<StyledProps>`
  font-size: 11px;
  margin-top: 4px;
  color: #ffffff;
  align-self: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
`;


export const ContentModal = styled(BottomSheetView)`
  flex: 1 ;
  padding: 20px 20px 0px;
`;
export const ContainerPaperClip = styled(View)`
  gap: 40px;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;
export const ContainerFunctionality = styled(View)`
  gap: 20px;
  width: 20%;
  align-items: center;
`;
