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
                uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bq8LWtLHJ0eZG7KC9CDCGPoAe~~jxECquROVJsCnt-jTb-2TLe0cI2i1qBHKEeeXozl0DEJJ7-m37kmq0em8MP3wN3-YEKv1EHuVHMS9C8Vtxud3Fb5UzY0R~iC4W-YqV~QfD3L6b2MCy7enu3cK1PObYZ7kiSrHWrULC8KFcSpiZXhEYwmQx5oxRnm~Ouriia8zQIm7j~diwYe0uvq2UaPN6ea5LQBk~5inkyujZLL5sxm2lL~NF0XZ2oyOSzSDyGAe9CR3GgnLzcXtlqhFM1MtLczVvqrM0fZ9MKL1Hi-AW4sa8zji9-EE8jJneCyCJcoHm6XCk0O9VPTROouHVA__",
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
