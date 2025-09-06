import { StyleProp, SwitchProps, ViewStyle } from "react-native";
export interface ISwitch extends SwitchProps {
  label: string;
  isActive: boolean;
  theme?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>
  handleToggle: (valeu: boolean) => void;
}