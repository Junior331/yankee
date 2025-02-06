import { Image, View } from "react-native";
import React, { useState } from "react";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { Layout } from "@/components/organism";

export const Hearts = () => {
  const [tabActive, setTabActive] = useState("Main");
  const [text, setText] = useState("");
  const users = [
    { id: 1, name: "Mia Taylor", exibirBadge: true },
    { id: 2, name: "John Doe", exibirBadge: true },
    { id: 3, name: "Emily Clark", exibirBadge: true },
    { id: 4, name: "Lucas Smith", exibirBadge: false },
    { id: 5, name: "Sophia Brown", exibirBadge: false },
  ];
  return (
    <Layout>
      <S.ContainerTabs>
        <S.Tabs>
          {mocks.tabs.Main.map((tab) => (
            <S.Tab key={tab.id} onPress={() => setTabActive(tab.value)}>
              <S.Text tabs color={tabActive === tab.value ? "#fff" : "#4d4c4c"}>
                {tab.label}
              </S.Text>
            </S.Tab>
          ))}
        </S.Tabs>
      </S.ContainerTabs>

      <S.ContainerInput>
        <S.SearchIcon name="search" size={20} color="#777" />
        <S.StyledInput placeholder="Type here..." value={text} onChangeText={setText} />
      </S.ContainerInput>

      <S.ContainerList>
        {users.map((user) => (
          <View key={user.id} style={{ width: "100%", marginVertical: 15, height: "auto" }}>
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
                      uri: "",
                    }}
                  />
                  <S.ContainerBadge>
                    <S.Badge />
                  </S.ContainerBadge>
                </S.ContainerAvatar>

                <S.ContainerText>
                  <S.Title numberOfLines={1}>{user.name}</S.Title>
                  <S.Text numberOfLines={2} color="#f2f2f2">
                    Yo, bestieee, when are we hanging out?? We...
                  </S.Text>
                </S.ContainerText>

                {user.exibirBadge && (
                  <>
                    <S.Text color="#f2f2f2">+4</S.Text>
                    <S.BadgeBlue />
                  </>
                )}
              </S.ContainerUser>
            </S.Container>
          </View>
        ))}
      </S.ContainerList>
    </Layout>
  );
};
