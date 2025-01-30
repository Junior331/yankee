import React from "react";
import { ActivityIndicator } from "react-native";

import { IButton } from "./@types";
import { Container, TitleButton } from "./styles";

export const Button = ({
  title,
  width,
  height,
  onPress,
  isLoading = false,
}: IButton) => {
  return (
    <Container width={width} height={height} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <TitleButton>{title}</TitleButton>
      )}
    </Container>
  );
};

export default Button;
