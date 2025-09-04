import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: red;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  position: relative;
`;

export const GradientOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.View`
  padding: 60px 20px 20px 20px;
  z-index: 10;
`;

export const CloseIcon = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 20px;
  z-index: 10;
`;

export const FormContainer = styled.View`
  margin-bottom: 40px;
`;

export const FormField = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-size: 14px;
`;

export const TextArea = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 12px 16px;
  color: #fff;
  font-size: 14px;
  min-height: 100px;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: #007AFF;
  border-radius: 25px;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const StartButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;