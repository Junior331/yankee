import styled from "styled-components";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Text as TextComponent } from "@/components/elements";
import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";

export const Container = styled(View)<StyledProps>`
  padding: 15px 5px;
  background-color: ${({ bg_color }) => bg_color};
`;

export const InputContainer = styled(View)<StyledProps>`
  flex-direction: row;
  align-items: flex-end;
 background-color: ${({ bg_color }) => bg_color};
  border-radius: 25px;
  padding: 8px;
  min-height: 50px;
`;

export const AttachmentButton = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const Input = styled(TextInput)<StyledProps>`
  flex: 1;
  min-height: 35px;
  max-height: 100px;
  padding: 8px 12px;
  color: #ffffff;
  font-size: 16px;
  background-color: ${({ bg_color }) => bg_color};
`;

export const ActionButton = styled(TouchableOpacity)<{ variant?: 'send' | 'record' }>`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  background-color: ${({ variant }) => 
    variant === 'send' ? '#0084FF' : 'transparent'
  };
`;

export const RecordingContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: 25px;
  padding: 12px 16px;
`;

export const RecordingDot = styled(View)`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #FF3B30;
  margin-right: 12px;
`;

export const RecordingText = styled(TextComponent)`
  flex: 1;
  color: #ffffff;
  font-size: 16px;
`;

export const RecordingDuration = styled(TextComponent)`
  color: #FF3B30;
  font-size: 16px;
  font-weight: 600;
  margin-right: 12px;
`;

export const StopRecordingButton = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  border-radius: 18px;
  background-color: #FF3B30;
  justify-content: center;
  align-items: center;
`;