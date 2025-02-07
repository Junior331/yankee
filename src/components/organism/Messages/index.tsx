import { Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { Layout } from "@/components/organism";

export const Messages = () => {
  const [tabActive, setTabActive] = useState("Main");
  const [text, setText] = useState("");

  const messages = [
    {
      id: 1,
      active: true,
      name: "Ryan Brooks",
      photo: "https://exemplo.com/ryan.jpg",
      messages: ["Tell me we weren’t just talking about this??"],
      unread: 1,
    },
    {
      id: 2,
      active: false,
      name: "Logan Harris",
      photo: "https://exemplo.com/logan.jpg",
      messages: ["Sent you a post"],
      unread: 0,
    },
  ];

  return (
    <>
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
        <S.StyledInput
          placeholder="Type here..."
          value={text}
          onChangeText={setText}
        />
      </S.ContainerInput>

      <S.ContainerList>
        {messages.map((message) => {
          const lastMessage = message.messages[message.messages.length - 1];
          const hasUnread = message.unread > 0;

          return (
            <TouchableOpacity
              key={message.id}
              style={{ width: "100%", marginVertical: 15, height: "auto" }}
            >
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
              </S.Container>
            </TouchableOpacity>
          );
        })}
      </S.ContainerList>
    </>
  );
};
