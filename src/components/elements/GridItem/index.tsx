import { Image } from "react-native";
import React, { memo, useState } from "react";

import * as S from "./styles";
import { Props } from "./@types";
import { Loading } from "../Loading";

export const GridItem = memo(({ isLarge, isSingle, uri }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <S.StyledGridItem isLarge={isLarge} isSingle={isSingle}>
      {imageLoading && <Loading />}
      <Image
        source={{ uri }}
        resizeMode="cover"
        onLoadEnd={() => setImageLoading(false)}
        style={{ width: "100%", height: "100%" }}
      />
    </S.StyledGridItem>
  );
});
