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

