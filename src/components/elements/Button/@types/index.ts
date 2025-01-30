import { ButtonProps } from 'react-native';

export interface IButton extends ButtonProps {
  title: string;
  width?: string;
  height?: string;
  isLoading?: boolean;
  onPress?: () => void;
}

