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
  align-items: start;
  justify-content: center;
`;

export const Content = styled(ViewGeneric)`
  width: 100%;
  flex: 1 0 auto;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  > &:first-child {
    padding: 0px 15px;
  }
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
  text-transform: ${({ textTransform }) => textTransform};
`;

export const ImageBackground = styled(ImageBackgroundReact)`
  width: 100%;
  height: auto;
  min-height: 450px;
  position: relative;
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

export const LiveContent = styled.View`
  padding: 0px 10px 15px;
`;

export const LiveDescription = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const LiveQuestion = styled(Text)`
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

export const CommentsSection = styled.View`
  flex: 1;
  height: 200px;
  position: relative;
  padding-bottom: 8px;
  padding: 8px 15px 0px;
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

export const GradientBottom = styled(LinearGradient)<StyledProps>`
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  pointer-events: none;
  height: ${({ height }) => height || "60px"};
`;

export const CommentItem = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const CommentAvatar = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  border-radius: 16px;
`;

export const CommentText = styled(Text)`
  margin-top: 2px;
`;

export const BottomSection = styled.View`
  left: 16px;
  right: 16px;
  bottom: 80px;
  position: absolute;
`;

export const CommentInputContainer = styled.View`
  gap: 12px;
  width: 100%;
  padding: 0px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const CommentInputWrapper = styled.View<StyledProps>`
  flex: 1;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  padding: 2px 12px 2px 4px;
  justify-content: space-between;
  background-color: ${({ bg_color }) => bg_color};
`;

export const ExternalActionIcons = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const IconButton = styled.View`
  width: 32px;
  height: 32px;
  align-items: center;
  border-radius: 16px;
  justify-content: center;
`;

export const DonationModal = styled.View<StyledProps>`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  min-height: 400px;
  background-color: ${({ bg_color }) => bg_color};
`;

export const ModalHandle = styled.View`
  width: 40px;
  height: 4px;
  background-color: #666;
  border-radius: 2px;
  align-self: center;
  margin-bottom: 20px;
`;

export const DonationTitle = styled.View`
  margin-bottom: 8px;
`;

export const DonationDescription = styled.View`
  margin-bottom: 24px;
`;

export const AmountContainer = styled.View`
  gap: 8px;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const AmountButton = styled.View<StyledProps>`
  background-color: ${({ bg_color }) => bg_color};
  padding: 12px 16px;
  border-radius: 8px;
  min-width: 60px;
  align-items: center;
`;

export const CustomAmountSection = styled.View`
  margin-bottom: 24px;
`;

export const CustomAmountInput = styled.View<StyledProps>`
  background-color: ${({ bg_color }) => bg_color};
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  min-height: 50px;
  justify-content: center;
`;

export const DonateButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 16px;
  border-radius: 12px;
  align-items: center;
  margin-top: 8px;
`;

export const PaymentMethodsContainer = styled.View`
  gap: 5px;
  margin-bottom: 24px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PaymentMethodButton = styled.View<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? "#fff" : "#3a3a3a")};
  padding: 12px 18px;
  border-radius: 8px;
  align-items: center;
`;

export const ValidationError = styled.View`
  margin-bottom: 16px;
  padding: 8px 12px;
  background-color: rgba(255, 68, 68, 0.1);
  border-radius: 6px;
  border-left-width: 3px;
  border-left-color: #ff4444;
`;

export const StepHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: start;
`;

export const BackButton = styled.View`
  padding: 0;
  align-items: center;
  flex-direction: row;
  margin-left: -8px;
  justify-content: center;
`;

export const ProcessingContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 16px;
`;

export const LoadingSpinner = styled.View<StyledProps>`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border-width: 4px;
  border-top-color: #007aff;
  border-color:  ${({ isSecondary }) => (isSecondary ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")};
  
`;

export const ConfirmationContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 16px;
`;
