import React from "react";
import { Image } from "react-native";

import * as S from "./styles";
import { ICardPost } from "./@types";

export const CardPost = ({
  name,
  avatar,
  style,
  children,
  timestamp,
  buttonHeader,
}: ICardPost) => {
  return (
    <S.Container style={style}>
      <S.Header>
        <S.ContainerUser>
          <S.ContainerAvatar>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: avatar,
              }}
            />
          </S.ContainerAvatar>
          <S.ContainerText>
            <S.Title>{name}</S.Title>
            <S.Text>{timestamp}</S.Text>
          </S.ContainerText>
        </S.ContainerUser>
        <S.TouchableOpacity>
          {buttonHeader}
        </S.TouchableOpacity>
      </S.Header>
      {children}
    </S.Container>
  );
};
