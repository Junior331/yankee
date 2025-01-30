import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { Heart } from "@/assets/icons";
import { IGenericCommet } from "./@types";

export const GenericCommet = ({
  likes,
  name,
  time,
  avatar,
  description,
}: IGenericCommet) => {
  const [liked, setLiked] = useState(false);

  return (
    <S.Container>
      <S.ContainerUser>
        <S.ContainerAvatar>
          <Image
            source={{
              uri: avatar,
            }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 100,
            }}
          />
        </S.ContainerAvatar>
        <S.ContainerText>
          <S.Text>
            {name} <S.Text>{time}</S.Text>
          </S.Text>
          <S.Title>{description}</S.Title>
          <TouchableOpacity>
            <S.Text>Reply</S.Text>
          </TouchableOpacity>
        </S.ContainerText>
      </S.ContainerUser>
      <S.ContainerLike>
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <Heart color={liked ? "#F2F2F2" : "transparent"} />
        </TouchableOpacity>
        <S.Text>{liked ? likes + 1 : likes}</S.Text>
      </S.ContainerLike>
    </S.Container>
  );
};
