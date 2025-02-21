import React, { useState } from "react";
import { Image } from "react-native";

import * as S from "./styles";
import { ICardPost } from "./@types";
import { Loading } from "@/components/elements";

export const CardPost = ({
  name,
  avatar,
  style,
  userTag,
  children,
  buttonHeader,
}: ICardPost) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <S.Container style={style}>
      <S.Header>
        <S.ContainerUser>
          <S.ContainerAvatar>
            {imageLoading && <Loading />}
            <Image
              resizeMode="cover"
              onLoadEnd={() => setImageLoading(false)}
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: avatar,
              }}
            />
          </S.ContainerAvatar>
          <S.ContainerText>
            <S.Title>{name}</S.Title>
            <S.Text>{userTag}</S.Text>
          </S.ContainerText>
        </S.ContainerUser>
        <S.TouchableOpacity>{buttonHeader}</S.TouchableOpacity>
      </S.Header>
      {children}
    </S.Container>
  );
};
