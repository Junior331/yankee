import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type LayoutAbstractProps = {
  children: ReactNode;
  titleHeader?: string;
  iconHeader?: ReactNode;
  style?: StyleProp<ViewStyle>;
};
