import React from "react";
import { Text } from "react-native";

import { Soous } from "./styles";
import { TitleSoousProps } from "./@types";

export const TitleSoous = ({ fontSize = 24 }: TitleSoousProps) => {
  return (
    <Soous fontSize={fontSize}>
      <Text style={{ color: "#ffffff" }}>soo</Text>
      <Text style={{ color: "#484BFF" }}>us</Text>
    </Soous>
  );
};
