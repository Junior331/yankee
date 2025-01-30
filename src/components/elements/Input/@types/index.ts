import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface IInput extends TextInputProps {
  icon: ReactNode;
  placeholder: string;
  secureTextEntry?: boolean;
}
