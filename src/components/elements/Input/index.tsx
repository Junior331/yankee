import React, { useState } from "react";

import { IInput } from "./@types";
import { Visibility } from "@/assets/icons";
import {
  Container,
  InputIcon,
  InputContent,
  ToggleVisibilityButton,
} from "./styles";

export const Input = ({
  icon,
  placeholder,
  secureTextEntry = false,
  ...rest
}: IInput) => {
  const [isPasswordVisible, setPasswordVisible] =
    useState<boolean>(secureTextEntry);

  return (
    <Container>
      <InputIcon>{icon}</InputIcon>
      <InputContent
        {...rest}
        placeholder={placeholder}
        secureTextEntry={!isPasswordVisible && secureTextEntry} // manages visibility
      />

      {secureTextEntry && (
        <ToggleVisibilityButton
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Visibility />
        </ToggleVisibilityButton>
      )}
    </Container>
  );
};
