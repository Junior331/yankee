import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { View, ImageBackground as ImageBackgroundReact } from "react-native";

import { Text as TextComponent } from "@/components/elements";
import { StyledProps } from "@/utils/types";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: start;
  flex-direction: row;
  justify-content: start;
`;

export const Container = styled(ViewGeneric)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 15px;
  align-items: start;
  justify-content: center;
`;

export const Content = styled(ViewGeneric)`
  width: 100%;
  flex: 1 0 auto;
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

export const CloseIcon = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LiveBadge = styled(View)`
  gap: 5px;
  align-items: center;
  flex-direction: row;
`;

export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || "#FAF9F9"};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`;

export const ImageBackground = styled(ImageBackgroundReact)`
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 450px;
  position: relative;
  border-radius: 24px;
  background-color: transparent;
`;

export const LiveContainer = styled(ViewGeneric)`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: start;
  z-index: 2;
  flex-direction: column;
  justify-content: space-between;
`;

export const LiveTitleContainer = styled.View`
  padding: 20px;
  border-radius: 20px;
`;

export const LiveTitle = styled.Text`
  color: #FAF9F9;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const LiveContent = styled.View`
  padding: 0px 10px 15px;
`;

export const LiveDescription = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const LiveQuestion = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const GradientOverlay = styled(LinearGradient)`
  left: 0;
  right: 0;
  bottom: 0;
  height: 276px;
  flex-shrink: 0;
  position: absolute;
`;

export const LiveSubtext = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`;

export const CommentsSection = styled.View`
  flex: 1;
  padding-top: 8px;
  position: relative;
  padding-bottom: 8px;
  height: 200px;
`;

export const GradientTop = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 60px;
  pointer-events: none;
`;

export const GradientBottom = styled(LinearGradient)`
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  height: 60px;
  position: absolute;
  pointer-events: none;
`;

export const CommentItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const CommentAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 8px;
`;

export const CommentName = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const CommentText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 2px;
`;

export const BottomSection = styled.View`
  position: absolute;
  bottom: 80px;
  left: 16px;
  right: 16px;
`;

export const CommentInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ActionIcons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ActionIcon = styled.Text`
  font-size: 24px;
`;
