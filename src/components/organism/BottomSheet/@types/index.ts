import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ReactNode, RefObject } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IBottomSheet {
  size: number;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export type BottomSheetRef = RefObject<BottomSheetMethods>;

export type Comment = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  text: string;
  timestamp: string;
  likes: number;
};
