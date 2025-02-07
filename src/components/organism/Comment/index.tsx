import { Image } from "react-native";
import React, { useState } from "react";

import * as S from "./styles";
import { IComment } from "./@types";
import { Chat, Star } from "@/assets/icons";
import { Loading } from "@/components/elements";

export const Comment = ({ avatar, name, description }: IComment) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <S.Container>
      <S.ContainerUser>
        <S.ContainerAvatar>
          {imageLoading && <Loading />}

          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
            onLoadEnd={() => setImageLoading(false)}
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
