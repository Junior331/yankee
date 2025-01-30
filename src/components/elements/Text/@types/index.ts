import { ReactNode } from 'react';
import { TextProps as TextReactProps } from 'react-native';

export type Props = TextReactProps & {
  children: ReactNode;
};
