import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { Text as TextComponent } from "@/components/elements";

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