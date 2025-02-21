import React from "react";

import * as S from "./styles";
import { LayoutAbstractProps } from "./@types";
import { HeaderPages } from "@/components/organism";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export const Layout = ({
  style,
  children,
  iconHeader,
  titleHeader,
  isShowHeader = true,
}: LayoutAbstractProps) => {
  return (
    <BottomSheetModalProvider>
      <S.Container>
        <S.Content style={style}>
          {isShowHeader && (
            <HeaderPages title={titleHeader} icon={iconHeader} />
          )}
          {children}
        </S.Content>
      </S.Container>
    </BottomSheetModalProvider>
  );
};
