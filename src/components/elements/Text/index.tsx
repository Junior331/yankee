import React from "react";

import * as S from "./styles"
import { Props } from "./@types";


export const Text = ({ children, ...res }: Props) => {
  return (
    <S.Text {...res}>
      {children}
    </S.Text>
  );
};

