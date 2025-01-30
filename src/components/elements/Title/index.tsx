import React from "react";

import * as S from "./styles"
import { Props } from "./@types";


export const Title = ({ children, ...res }: Props) => {
  return (
    <S.Title {...res}>
      {children}
    </S.Title>
  );
};
