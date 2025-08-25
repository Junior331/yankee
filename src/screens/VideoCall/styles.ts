import styled from "styled-components";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Text as TextComponent, Title as TitleComponent } from "@/components/elements";

export const Container = styled(View)`
  flex: 1;
  background-color: #000000;
`;

export const VideoBackground = styled(ImageBackground)`
  flex: 1;
  justify-content: space-between;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const CallInfo = styled(View)`
  flex: 1;
  align-items: center;
`;

export const ContactName = styled(TitleComponent)`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const CallStatus = styled(TextComponent)`
  font-size: 14px;
  color: #b0b0b0;
`;

export const CallDuration = styled(TextComponent)`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
`;

export const SelfVideoContainer = styled(View)`
  position: absolute;
  top: 100px;
  right: 20px;
  width: 120px;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background-color: #1c1c1e;
`;

export const SelfVideo = styled(View)`
  flex: 1;
  background-color: #2c2c2e;
  justify-content: center;
  align-items: center;
`;

export const SelfVideoPlaceholder = styled(TextComponent)`
  color: #8e8e93;
  font-size: 12px;
`;

export const BottomControls = styled(View)`
  padding: 40px 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const CallActions = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

export const ActionButton = styled(TouchableOpacity)<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'danger':
        return '#FF3B30';
      case 'secondary':
        return 'rgba(255, 255, 255, 0.2)';
      default:
        return '#34C759';
    }
  }};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const IncomingCallOverlay = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: space-between;
  align-items: center;
  padding: 80px 20px 60px;
`;

export const IncomingContactInfo = styled(View)`
  align-items: center;
`;

export const IncomingAvatar = styled(View)`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background-color: #c4c4c4;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`;

export const IncomingContactName = styled(TitleComponent)`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin-bottom: 8px;
`;

export const IncomingContactUsername = styled(TextComponent)`
  font-size: 16px;
  color: #b0b0b0;
  text-align: center;
`;

export const IncomingCallStatus = styled(TextComponent)`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  opacity: 0.8;
`;

export const IncomingCallActions = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;

// export const MinimizeButton = styled(TouchableOpacity)`
//   position: absolute;
//   top: 60px;
//   left: 20px;
//   width: 40px;
//   height: 40px;
//   border-radius: 20px;
//   background-color: rgba(0, 0, 0, 0.5);
//   justify-content: center;
//   align-items: center;
// `;