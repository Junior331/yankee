import * as React from "react";
import { useRouter } from "expo-router";

import * as S from "./styles";
import { Button, SafeScreen } from "@/components/elements";

export const Welcome = () => {
  const router = useRouter();

  return (
    <SafeScreen>
      <S.Container>
      <S.Header>
        <S.Title>yankee</S.Title>
      </S.Header>
      <S.Content>
        <S.Image top={"70px"} left={"-10px"} />

        <S.ContainerAccount>
          <S.Text>First time with us? Let’s go!!</S.Text>
          <Button
            title="Create an account"
            onPress={() => router.push("/(public)/signup")}
          />
        </S.ContainerAccount>

        <S.Line />
        <S.ContainerAccount>
          <S.Text>You already have an account here?</S.Text>

          <Button
            title="Sing in"
            onPress={() => router.push("/(public)/signin")}
          />
        </S.ContainerAccount>

        <S.Image
          right={"-10px"}
          bottom={"70px"}
          transform={"rotateZ(180deg)"}
        />
      </S.Content>
      </S.Container>
    </SafeScreen>
  );
};
