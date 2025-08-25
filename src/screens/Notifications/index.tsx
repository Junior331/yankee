import React from "react";
import * as S from "./styles";
import { SubHeader } from "@/components/organism";
import { useRouter } from "expo-router";
import { mockMessages } from "./utils";
import { Image, TouchableOpacity } from "react-native";

const ButtonReply = () => {
  return (
    <S.ButtonFollow>
      <S.Text
        color="#171717"
        tabs
        style={{
          fontSize: 9,
          fontWeight: 500,
          fontFamily: "Poppins-Medium",
        }}
      >
        Reply
      </S.Text>
    </S.ButtonFollow>
  );
};

const ButtonImagem = () => {
  return (
    <Image
      style={{
        width: 50,
        height: 50,
        borderRadius: 10,
      }}
      resizeMode="cover"
      source={{
        uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bq8LWtLHJ0eZG7KC9CDCGPoAe~~jxECquROVJsCnt-jTb-2TLe0cI2i1qBHKEeeXozl0DEJJ7-m37kmq0em8MP3wN3-YEKv1EHuVHMS9C8Vtxud3Fb5UzY0R~iC4W-YqV~QfD3L6b2MCy7enu3cK1PObYZ7kiSrHWrULC8KFcSpiZXhEYwmQx5oxRnm~Ouriia8zQIm7j~diwYe0uvq2UaPN6ea5LQBk~5inkyujZLL5sxm2lL~NF0XZ2oyOSzSDyGAe9CR3GgnLzcXtlqhFM1MtLczVvqrM0fZ9MKL1Hi-AW4sa8zji9-EE8jJneCyCJcoHm6XCk0O9VPTROouHVA__",
      }}
    />
  );
};

export const Notifications = () => {
  const router = useRouter();

  return (
    <S.Container>
      <SubHeader title={"Notifications"} handleOnPress={() => router.back()} />

      <S.ContainerList>
        {mockMessages.map((message) => {
          const lastMessage = message.messages[message.messages.length - 1];
          return (
            <TouchableOpacity
              key={message.id}
              style={{ width: "100%", marginVertical: 15, height: "auto" }}
            >
              <S.ContainerMessage>
                <S.ContainerUser>
                  <S.ContainerAvatar>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                      }}
                      resizeMode="cover"
                      source={{ uri: message.photo }}
                    />
                  </S.ContainerAvatar>

                  <S.ContainerText>
                    <S.Title numberOfLines={1}>{message.name}</S.Title>
                    <S.Text numberOfLines={2} color="#f2f2f2">
                      {lastMessage}
                    </S.Text>
                  </S.ContainerText>

                  {message.active ? <ButtonReply /> : <ButtonImagem />}
                </S.ContainerUser>
              </S.ContainerMessage>
            </TouchableOpacity>
          );
        })}
      </S.ContainerList>
    </S.Container>
  );
};
