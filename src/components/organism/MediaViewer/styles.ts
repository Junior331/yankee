import styled from "styled-components/native";
import Colors from "@/constants/Colors";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.95);
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const CloseText = styled.Text`
  color: ${Colors.dark.text};
  font-size: 18px;
  font-weight: bold;
`;

export const MediaContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const FullScreenImage = styled.Image`
  width: 100%;
  height: 70%;
  resize-mode: contain;
`;


export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;