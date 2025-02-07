import React from "react";

import * as S from "./styles";
import { GridProps } from "./@types";
import { GridItem } from "@/components/elements";

export const DynamicGrid: React.FC<GridProps> = React.memo(({ items }) => {
  if (!items.length) return null;

  const displayItems = items.slice(0, 8);
  const isSingleImage = displayItems.length === 1;

  return (
    <S.GridContainer>
      <GridItem isLarge isSingle={isSingleImage} uri={displayItems[0]} />
      {displayItems.length > 1 && (
        <S.RightColumn>
          {displayItems.slice(1).map((item: string, index: number) => (
            <GridItem key={index} uri={item} />
          ))}
        </S.RightColumn>
      )}
    </S.GridContainer>
  );
});