import styled, { css } from "styled-components";
import { View, TouchableOpacity, Image } from "react-native";
import { Text as TextComponent } from "@/components/elements";
import { StyledProps } from "@/utils/types";

export const MessageContainer = styled(View)<StyledProps>`
  margin-bottom: 15px;
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
  background-color: ${({ isSender }) => (isSender ? "#0084FF" : "#232323")};
  border-top-left-radius: ${({ isSender }) => (isSender ? "18px" : "0px")};
  border-top-right-radius: ${({ isSender }) => (isSender ? "3px" : "18px")};
`;

export const MessageText = styled(TextComponent)<StyledProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ isSender }) => (isSender ? "#ffffff" : "#ffffffff")};
`;

export const MessagePointer = styled(View)<StyledProps>`
  top: -6px;
  width: 0;
  height: 0;
  position: absolute;

  ${({ isSender }) =>
    isSender
      ? css`
          right: -2px;
          border-left-width: 8px;
          border-right-width: 8px;
          border-bottom-width: 12px;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: #0084ff;
          transform: rotate(-90deg);
          border-radius: 2px;
        `
      : css`
          left: -2px;
          border-left-width: 8px;
          border-right-width: 8px;
          border-bottom-width: 12px;
          border-left-color: transparent;
          border-right-color: transparent;
          border-bottom-color: #232323;
          transform: rotate(90deg);
          border-radius: 2px;
        `}
`;

export const TimeText = styled(TextComponent)<StyledProps>`
  font-size: 11px;
  margin-top: 4px;
  color: #ffffff80;
  align-self: ${({ isSender }) => (isSender ? "flex-end" : "flex-start")};
  padding: 0 12px 0 12px;
`;

export const ImageMessage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  margin: 4px 0;
`;

export const AudioContainer = styled(View)`
  flex-direction: column;
  min-width: 200px;
  height: 44px;
`;

export const containerAudioButton = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const ButtonPlay = styled(View)`
  right: -2px;
  border-left-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 12px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #ffffffff;
  transform: rotate(90deg);
  border-radius: 2px;
`;

export const AudioPlayButton = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: transparent;
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
  font-size: 10px;
  color: ${({ isSender }) => (isSender ? "#ffffff" : "#ffffffff")};
  font-weight: 500;
  padding: 0 0 0 52px;
`;
