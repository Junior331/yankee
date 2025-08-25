import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeScreenProps } from "./@types";
import Colors from "@/constants/Colors";

export const SafeScreen: React.FC<SafeScreenProps> = ({
  children,
  backgroundColor = Colors.dark.background,
  edges = ['top', 'bottom'],
  style,
  excludeEdges = [],
}) => {
  const safeEdges = edges.filter(edge => !excludeEdges.includes(edge));
  
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor,
        },
        style,
      ]}
      edges={safeEdges}
    >
      {children}
    </SafeAreaView>
  );
};