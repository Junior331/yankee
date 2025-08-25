import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface SafeScreenProps {
  children: ReactNode;
  backgroundColor?: string;
  edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
  style?: ViewStyle;
  excludeEdges?: Array<'top' | 'right' | 'bottom' | 'left'>;
}