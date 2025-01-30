import { ReactNode } from "react";

export interface IHeader {
  label?: string;
  children?: ReactNode;
  isSecondary?: boolean;
  handleOnPress?: () => void;
}
export interface StyledProps {
  isSecondary?: boolean;
}
