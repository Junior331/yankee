import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type LayoutAbstractProps = {
  padding?: string;
  children: ReactNode;
  titleHeader?: string;
  iconHeader?: ReactNode;
  isShowHeader?: boolean;
  paddingHeader?: string;
  style?: StyleProp<ViewStyle>;
};
