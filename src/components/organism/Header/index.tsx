import React from "react";

import * as S from "./styles";
import { IHeader } from "./@types";
import { LeftArrow } from "@/assets/icons";
import { useNavigationHandler } from "@/hooks/navigation";

export const Header = ({ label, handleOnPress, isSecondary }: IHeader) => {
  const { goBack } = useNavigationHandler();

  return (
    <S.Container isSecondary={isSecondary}>
      <S.Button onPress={handleOnPress || goBack} isSecondary={isSecondary}>
        {!isSecondary && <LeftArrow />}
        <S.Text>{label || "Back"}</S.Text>
      </S.Button>
    </S.Container>
  );
};
