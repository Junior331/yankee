import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, forwardRef, useContext, useCallback } from "react";

import * as S from "./styles";
import Colors from "@/constants/Colors";
import { IBottomSheet } from "./@types";
import { useTheme } from "@/contexts/ThemeContext";
import { TabVisibilityContext } from "@/contexts/tabVisibility";

export const GenericBottomSheet = forwardRef<BottomSheet, IBottomSheet>(
  ({ style, children, size = -1, ...res }, ref) => {
    const { theme } = useTheme();
    const snapPoints = useMemo(() => ["30%", "70%", "95%"], []);
    const { setIsVisibility } = useContext(TabVisibilityContext);

    const handleSheetChanges = useCallback((index: number) => {
      setIsVisibility(index === -1);
    }, []);

    return (
      <S.Container style={style}>
        <BottomSheet
          {...res}
          ref={ref}
          index={size}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onChange={handleSheetChanges}
          backgroundStyle={{ backgroundColor: Colors[theme].background }}
          handleIndicatorStyle={{ backgroundColor: "#838485" }}
        >
          {children}
        </BottomSheet>
      </S.Container>
    );
  }
);
