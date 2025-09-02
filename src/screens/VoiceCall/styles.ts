import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { Text as TextComponent, Title as TitleComponent } from "@/components/elements";

export const Container = styled(View)`
  flex: 1;
  background-color: ${Colors.dark.background};
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled(View)`
  position: absolute;
  top: 50px;
  left: 10px;
  right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(TouchableOpacity)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const HeaderCallDuration = styled(TextComponent)`
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  background-color: transparent;
  border-radius: 16px;
`;

export const Content = styled(View)`
  flex: 1;
  width: 100%;
  padding: 40px 20px;
  justify-content: space-around;
  align-items: center;
`;

export const ContactInfo = styled(View)`
  align-items: center;
  margin-top: 150px;
`;

export const ContactAvatar = styled(View)`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: #c4c4c4;
  overflow: hidden;
  margin-bottom: 30px;
`;
export const ContainerVoiceCall = styled(View)`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const ContactName = styled(TitleComponent)`
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin-bottom: 8px;
`;

export const VoiceCall = styled(TextComponent)`
  font-size: 20px;
  color: #fff;
`;

export const CallStatus = styled(TextComponent)`
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  margin-top: 40px;
  opacity: 0.8;
`;

export const CallDuration = styled(TextComponent)`
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  margin-top: 15px;
  font-weight: 600;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
`;

export const CallActions = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-bottom: 60px;
`;

export const ActionButton = styled(TouchableOpacity)<{ variant?: "primary" | "secondary" | "danger" }>`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "danger":
        return "#D63838";
      case "secondary":
        return "rgba(255, 255, 255, 0.2)";
      default:
        return "#34C759";
    }
  }};
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
