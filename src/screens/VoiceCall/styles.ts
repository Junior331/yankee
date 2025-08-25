import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import { Text as TextComponent, Title as TitleComponent } from "@/components/elements";

export const Container = styled(View)`
  flex: 1;
  background-color: ${Colors.dark.background};
  justify-content: space-between;
  align-items: center;
`;

export const BackgroundGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled(View)`
  flex: 1;
  width: 100%;
  padding: 40px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const ContactInfo = styled(View)`
  align-items: center;
  margin-top: 80px;
`;

export const ContactAvatar = styled(View)`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: #c4c4c4;
  overflow: hidden;
  margin-bottom: 30px;
  border: 4px solid rgba(255, 255, 255, 0.3);
`;

export const ContactName = styled(TitleComponent)`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin-bottom: 8px;
`;

export const ContactUsername = styled(TextComponent)`
  font-size: 16px;
  color: #b0b0b0;
  text-align: center;
`;

export const CallStatus = styled(TextComponent)`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 40px;
  opacity: 0.8;
`;

export const CallDuration = styled(TextComponent)`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
`;

export const CallActions = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-bottom: 60px;
`;

export const ActionButton = styled(TouchableOpacity)<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
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
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 8;
`;

export const MuteButton = styled(ActionButton)`
  background-color: rgba(255, 255, 255, 0.2);
`;

export const SpeakerButton = styled(ActionButton)`
  background-color: rgba(255, 255, 255, 0.2);
`;

export const IncomingCallActions = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 200px;
  margin-bottom: 60px;
`;