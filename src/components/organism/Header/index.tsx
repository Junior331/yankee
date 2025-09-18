import React from "react";

import * as S from "./styles";
import { IHeader } from "./@types";
import Colors from "@/constants/Colors";
import { LeftArrow } from "@/assets/icons";
import { useTheme } from "@/contexts/ThemeContext";
import { useNavigationHandler } from "@/hooks/navigation";

export const Header = ({ label, handleOnPress, isSecondary }: IHeader) => {
  const { theme } = useTheme();
  const { goBack } = useNavigationHandler();
  return (
    <S.Container isSecondary={isSecondary}>
      <S.Button onPress={handleOnPress || goBack} isSecondary={isSecondary}>
        {!isSecondary && <LeftArrow color={Colors[theme].text} />}
        <S.Text>{label || "Back"}</S.Text>
      </S.Button>
    </S.Container>
  );
};
