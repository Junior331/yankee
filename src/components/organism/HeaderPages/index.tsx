import React, { useState } from "react";
import { Image } from "react-native";
import { useRouter } from "expo-router";

import * as S from "./styles";
import { IHeaderPages } from "./@types";
import { Notification } from "@/assets/icons";
import { Loading } from "@/components/elements";
export const HeaderPages = ({ icon, title }: IHeaderPages) => {
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <S.Container>
      <S.IconContainer>{icon}</S.IconContainer>

      {title && <S.Title>{title}</S.Title>}
      <S.ContainerUser>
        <S.ContainerBadge onPress={() => router.push("/(tabs)/notifications")}>
          <Notification  />

          <S.Badge>
            <S.Text>3</S.Text>
          </S.Badge>
        </S.ContainerBadge>

        <S.ContainerBadge onPress={() => router.push("/(tabs)/profile")}>
          <S.ContainerAvatar>
            {imageLoading && <Loading />}
            <Image
              resizeMode="cover"
              onLoadEnd={() => setImageLoading(false)}
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bgEV7gxiUUIr1gxjDqcMcgQdsEpmEkZYfoij8dJOFaTABECzytvUN6NCjOPozBU86gwQPKx7u2vVBo0Gcj5BuoYJAXdlDp1Q4TI0SiqcnqnPerzoFq-dFtlzUkaN-onqrluYuVerhedYGrX2uLYtF-690IZu4ejexMUpLgQBycycAgRJ2nbd0M4YlUK0nceqid~jAmCjFt1lCgWyfyVjuyOIkzJLn4OfSd4g7UhRE8vRq7Cf5znUoF-pSDhd7CqyDe8J0TLf6H2RW6unrtLYFGCq0MKguSiawXN8dCQlrggIiFdJJctP~49F9oBuiZC1Zb49yJsFHBPMIqQC6tixkw__",
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
