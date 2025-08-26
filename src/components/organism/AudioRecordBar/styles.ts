import styled from "styled-components/native";
import { View, TouchableOpacity, Text, Animated } from "react-native";

export const Container = styled(View)`
  background-color: #2c2c2e;
  border-radius: 25px;
  padding: 12px 20px;
  margin: 16px;
  flex-direction: row;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  elevation: 8;
  min-height: 50px;
`;

export const MicButton = styled(TouchableOpacity)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

export const ControlsContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WaveformContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 16px;
  height: 30px;
`;

export const WaveBar = styled(Animated.View)<{ isActive: boolean }>`
  width: 2px;
  background-color: ${({ isActive }) => (isActive ? '#007AFF' : '#4a4a4c')};
  border-radius: 1px;
  margin: 0 1.5px;
  min-height: 4px;
`;

export const TimerText = styled(Text)`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  margin: 0 12px;
  min-width: 40px;
  text-align: center;
`;

export const ActionButton = styled(TouchableOpacity)<{ disabled?: boolean; variant?: string }>`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ disabled, variant }) => 
    disabled ? '#4a4a4c' : 
    variant === 'send' ? '#007AFF' : 'transparent'};
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

export const PauseButton = styled(TouchableOpacity)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;