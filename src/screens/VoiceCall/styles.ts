import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent, Title as TitleComponent } from "@/components/elements";

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled(View)`
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(TouchableOpacity)`
  width: 44px;
  height: 44px;
  align-items: start;
  border-radius: 22px;
  justify-content: center;
  background-color: transparent;
`;

export const HeaderCallDuration = styled(TextComponent)<StyledProps>`
  font-size: 16px;
  font-weight: 600;
  border-radius: 16px;
  background-color: transparent;
  color: ${({ color }) => color || "#ffffff"};
`;

export const Content = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ContactInfo = styled(View)`
  margin-top: 100px;
  align-items: center;
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
  text-align: center;
  margin-bottom: 8px;
  
`;

export const VoiceCall = styled(TextComponent)`
  font-size: 20px;
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
  background-color: transparent;
`;


export const SpeakerIconButton = styled(ActionButton)`
  background-color: transparent;
`;

export const IncomingCallActions = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 200px;
  margin-bottom: 60px;
`;

export const MinimizedContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 100px;
  right: 20px;
  width: 120px;
  height: 160px;
  background-color: ${Colors.dark.background};
  border-radius: 16px;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  border: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
`;

export const MinimizedAvatar = styled(View)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #c4c4c4;
  overflow: hidden;
`;

export const MinimizedContactName = styled(TextComponent)`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 4px 0;
`;

export const MinimizedDuration = styled(TextComponent)`
  font-size: 10px;
  color: #ffffff;
  text-align: center;
  opacity: 0.8;
`;

export const MinimizedActions = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const MinimizedActionButton = styled(TouchableOpacity)<{ variant?: "primary" | "secondary" | "danger" }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
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
