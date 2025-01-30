import React from "react";
import { Image } from "react-native";
import { useRouter } from "expo-router";

import * as S from "./styles";
import { IHeaderPages } from "./@types";
import { Notification } from "@/assets/icons";
export const HeaderPages = ({ icon, title }: IHeaderPages) => {
  const router = useRouter();

  return (
    <S.Container>
      <S.IconContainer>{icon}</S.IconContainer>

      {title && <S.Title>{title}</S.Title>}
      <S.ContainerUser>
        <S.ContainerBadge>
          <Notification />

          <S.Badge>
            <S.Text>3</S.Text>
          </S.Badge>
        </S.ContainerBadge>

        <S.ContainerBadge onPress={() => router.push("/profile")}>
          <S.ContainerAvatar>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tv3TJ-o3R2dB8UDpP4NR9gFUS7Pp2BQHMPtJv4x6Z8jGTWBJbQSygPmT1lSUkQQUQ-cQsQbRNjCzJXOSSC6vn8tIxMDuuIWH1LONMZSy0NyP2~K13152zqvTXgrM3Tbxk2vDP~bmzSODJE3fQxGZfHXsrfDJlvdO0oeQDhI8U0CZ40c0quMXby-uMNuwZIHQrkQdSkSF48vYA8yE4opHTScAeWylDi9XpAIpk95GovDJ6ym1mC1wcLG3zBGDKzeGuNq5HZiC9FM1-1-vesDE-VYm6E~GdYsASX5C4PNMtWzlU2nM1u2gIZZn0eegZ64MU8VWkow4MXw8AG2KMo9-gw__",
              }}
            />
          </S.ContainerAvatar>
          <S.Badge>
            <S.Text>5</S.Text>
          </S.Badge>
        </S.ContainerBadge>
      </S.ContainerUser>
    </S.Container>
  );
};
