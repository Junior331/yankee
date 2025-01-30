import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import * as S from "./styles";
import { LayoutAbstractProps } from "./@types";
import { dismissKeyboard } from "@/utils/utils";
import { HeaderPages } from "@/components/organism";

export const Layout = ({
  style,
  children,
  iconHeader,
  titleHeader,
}: LayoutAbstractProps) => {

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <S.Container>
        <S.Content style={style}>
          <HeaderPages title={titleHeader} icon={iconHeader} />
          {children}
        </S.Content>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
