import { StyleProp, SwitchProps, ViewStyle } from "react-native";
export interface ISwitch extends SwitchProps {
  label: string;
  isActive: boolean;
  style?: StyleProp<ViewStyle>
  handleToggle: (valeu: boolean) => void;
}