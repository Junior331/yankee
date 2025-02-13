import React from "react";
import * as S from "./styles";

import { IProps } from "./@types";
import { LeftArrow } from "@/assets/icons";
import { Title } from "@/components/elements";

export const SubHeader = ({ title, style, children,handleOnPress }: IProps) => {

  return (
    <S.Container style={style}>
      <S.ButtonIcon onPress={handleOnPress}>
        <LeftArrow color="#ffffff" />
      </S.ButtonIcon>
      <Title>{title}</Title>

      <S.IconContainer>{children}</S.IconContainer>
    </S.Container>
  );
};
