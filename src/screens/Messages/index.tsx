import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import * as S from "./styles";
import { mockMessages } from "./utils";
import { mocks } from "@/services/mocks";
import { SubHeader } from "@/components/organism";

export const Messages = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [tabActive, setTabActive] = useState(1);

  return (
    <S.Container>
      <SubHeader title={"yankee"} handleOnPress={() => router.push("/(tabs)/profile")} />
      <S.ContainerTabs>
        <S.Tabs>
          {mocks.tabs.messages.map((tab) => (
            <S.Tab key={tab.id} onPress={() => setTabActive(tab.id)}>
              <S.Text tabs color={tabActive === tab.id ? "#fff" : "#999494"}>
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
        {mockMessages.map((message) => {
          const lastMessage = message.messages[message.messages.length - 1];
          const hasUnread = message.unread > 0;

          return (
            <TouchableOpacity key={message.id} style={{ width: "100%", marginVertical: 15, height: "auto" }} 
            onPress={() => router.push( "/(tabs)/chatuser" ) }
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
                    {message.active && (
                      <S.ContainerBadge>
                        <S.Badge />
                      </S.ContainerBadge>
                    )}
                  </S.ContainerAvatar>

                  <S.ContainerText>
                    <S.Title numberOfLines={1}>{message.name}</S.Title>
                    <S.Text numberOfLines={2} color="#f2f2f2">
                      {lastMessage}
                    </S.Text>
                  </S.ContainerText>

                  {hasUnread && (
                    <>
                      <S.Text color="#f2f2f2">+{message.unread}</S.Text>
                      <S.BadgeBlue />
                    </>
                  )}
                </S.ContainerUser>
              </S.ContainerMessage>
            </TouchableOpacity>
          );
        })}
      </S.ContainerList>
    </S.Container>
  );
};
