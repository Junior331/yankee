import React from "react";
import { Image } from "react-native";

import * as S from "./styles";
import { IComment } from "./@types";
import { Chat, Star } from "@/assets/icons";

export const Comment = ({ avatar, name, description }: IComment) => {
  return (
    <S.Container>
      <S.ContainerUser>
        <S.ContainerAvatar>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
            resizeMode="cover"
            source={{
              uri: avatar,
            }}
          />
          <S.ContainerBadge>
            <S.Badge>
              <Star />
            </S.Badge>
          </S.ContainerBadge>
        </S.ContainerAvatar>
        <S.ContainerText>
          <S.Title numberOfLines={1}>{name}</S.Title>
          <S.Text numberOfLines={2}>{description}</S.Text>
        </S.ContainerText>
        <Chat />
      </S.ContainerUser>
    </S.Container>
  );
};
