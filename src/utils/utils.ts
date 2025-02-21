import { Keyboard } from "react-native";

export const dismissKeyboard = () => {
  Keyboard.dismiss();
};

export const generateRandomNumber = (untilNumbers: number) =>
  Math.floor(Math.random() * untilNumbers);
export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const removeScrollUi = {
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
};


export const formatNumber = (num: number): string => {
  if (num >= 1e9) return `${Math.floor(num / 1e9)}bi`;
  if (num >= 1e6) return `${Math.floor(num / 1e6)}mi`;
  if (num >= 1e3) return `${Math.floor(num / 1e3)}k`;
  return num.toString();
};