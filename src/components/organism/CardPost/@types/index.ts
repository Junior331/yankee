import { ReactNode } from "react";
import { ViewStyle, StyleProp } from "react-native";

export interface ICardPost {
  name: string;
  avatar: string;
  timestamp: string;
  children: ReactNode;
  buttonHeader: ReactNode;
  style?: StyleProp<ViewStyle>;
}
