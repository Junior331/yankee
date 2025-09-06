import React from "react";

import * as S from "./styles";
import { Props } from "./@types";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

export const Text = ({ children, ...res }: Props) => {
  const { theme } = useTheme();

  return (
    <S.Text color={Colors[theme].text} {...res}>
      {children}
    </S.Text>
  );
};
