import React from "react";
import * as S from "./styles";

import { IProps } from "./@types";
import { LeftArrow } from "@/assets/icons";
import { Title } from "@/components/elements";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export const SubHeader = ({ title, style, children,handleOnPress }: IProps) => {
  const { theme } = useTheme();

  return (
    <S.Container style={style}>
      <S.ButtonIcon onPress={handleOnPress}>
        <LeftArrow color={Colors[theme].icon} />
      </S.ButtonIcon>
      <Title>{title}</Title>

      <S.IconContainer>{children}</S.IconContainer>
    </S.Container>
  );
};
