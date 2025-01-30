import { SwitchProps } from "react-native";
import { Dispatch, SetStateAction } from "react";

export interface ICheckbox {
  label: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}
