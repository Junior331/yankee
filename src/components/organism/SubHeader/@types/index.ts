import { ReactNode } from "react";
import { ViewStyle, StyleProp } from "react-native";

export interface IProps {
  title: string;
  children?: ReactNode;
  handleOnPress: () => void;
  style?: StyleProp<ViewStyle>;
}
