import { ReactNode } from "react";

export type LayoutAbstractProps = {
  text?: string;
  title?: string;
  subTitle?: string;
  children: ReactNode;
  labelHeader?: string;
  isSecondary?: boolean;
  handleOnPressHeader?: () => void;
};
