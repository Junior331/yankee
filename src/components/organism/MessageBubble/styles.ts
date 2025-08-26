import styled, { css } from "styled-components";
import { View, TouchableOpacity, Image } from "react-native";
import { Text as TextComponent } from "@/components/elements";
import { StyledProps } from "@/utils/types";

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

export const ImageMessage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  margin: 4px 0;
`;

export const AudioContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  min-width: 200px;
`;

export const AudioPlayButton = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const AudioWaveform = styled(View)`
  flex: 1;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 12px;
`;

export const AudioBar = styled(View)<{ height: number }>`
  width: 3px;
  height: ${({ height }) => height}px;
  border-radius: 2px;
`;

export const AudioDuration = styled(TextComponent)<StyledProps>`
  font-size: 12px;
  color: ${({ isSender }) => (isSender ? "#ffffff" : "#000000")};
  font-weight: 500;
`;