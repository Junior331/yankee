// components/organism/GenericCommet/index.tsx
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { Heart } from "@/assets/icons";
import Colors from "@/constants/Colors";
import { IGenericCommet } from "./@types";
import { Loading } from "@/components/elements";
import { useTheme } from "@/contexts/ThemeContext";

export const GenericCommet = ({
  likes,
  name,
  time,
  avatar,
  description,
  onReply,
}: IGenericCommet & { onReply?: () => void }) => {
  const { theme } = useTheme();
  const [liked, setLiked] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <S.Container>
      <S.ContainerUser>
        <S.ContainerAvatar>
          {imageLoading && <Loading />}

          <Image
            source={{
              uri: avatar,
            }}
            onLoadEnd={() => setImageLoading(false)}
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
          <TouchableOpacity onPress={onReply}>
            <S.Text>Reply</S.Text>
          </TouchableOpacity>
        </S.ContainerText>
      </S.ContainerUser>
      <S.ContainerLike>
        <TouchableOpacity onPress={() => setLiked((prev) => !prev)}>
          <Heart
            color={liked ? Colors.liked : Colors[theme].text}
            fill={liked ? Colors.liked : ""}
          />
        </TouchableOpacity>
        <S.Text>{liked ? likes + 1 : likes}</S.Text>
      </S.ContainerLike>
    </S.Container>
  );
};
