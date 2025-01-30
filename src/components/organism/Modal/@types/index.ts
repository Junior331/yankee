import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IModal {
  children: ReactNode;
  toValueOpen?: number;
  durationOpen?: number;
  toValueClose?: number;
  durationClose?: number;
  style?: StyleProp<ViewStyle>;
}

