import { Dispatch, ReactNode, SetStateAction } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IModal {
  children: ReactNode;
  modalVisible: boolean;
  style?: StyleProp<ViewStyle>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}
