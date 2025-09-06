import { useRouter } from "expo-router";
import React, { useState, useMemo, useEffect } from "react";
import { Image, TouchableOpacity, FlatList } from "react-native";

import * as S from "./styles";
import Colors from "@/constants/Colors";
import { mocks } from "@/services/mocks";
import { Layout } from "@/components/organism";
import { useTheme } from "@/contexts/ThemeContext";
import { ChatConversation } from "@/services/mocks/users";
import { useUnreadMessages } from "@/hooks/useUnreadMessages";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Messages = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const [text, setText] = useState("");
  const [tabActive, setTabActive] = useState(1); // 1 = Principal, 2 = Chat Requests

  // Unread messages management
  const { unreadCounts, markConversationAsRead, simulateNewMessage } =
    useUnreadMessages();

  // Demo notifications (remove in production)
  useEffect(() => {
    // Simulate random notifications for demo purposes
    const interval = setInterval(() => {
      const randomUser =
        mocks.users[Math.floor(Math.random() * mocks.users.length)];
      const messages = [
        "Hey! How are you doing?",
        "Check out this cool thing I found!",
        "Are you free for a call later?",
        "Thanks for the help earlier!",
        "Did you see the latest update?",
      ];
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      // 30% chance of new message notification
      if (Math.random() < 0.3) {
        simulateNewMessage(
          randomUser.name,
          randomMessage,
          `conv_${randomUser.id}`
        );
      }
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, [simulateNewMessage]);

  // Filtrar conversas baseado na aba ativa
  const conversations = useMemo(() => {
    const allConversations =
      tabActive === 1 ? mocks.mainConversations : mocks.chatRequests;

    if (!text.trim()) return allConversations;

    // Filtrar por texto de busca
    return allConversations.filter(
      (conv) =>
        conv.user.name.toLowerCase().includes(text.toLowerCase()) ||
        conv.user.username.toLowerCase().includes(text.toLowerCase()) ||
        conv.lastMessage.text.toLowerCase().includes(text.toLowerCase())
    );
  }, [tabActive, text]);

  const handleConversationPress = async (conversation: ChatConversation) => {
    // Mark conversation as read when opening
    if (conversation.unreadCount > 0) {
      await markConversationAsRead(conversation.id);
    }

    // Navegar para o chat passando os dados do usuário
    router.push({
      pathname: "/chatuser",
      params: {
        userId: conversation.user.id,
        userName: conversation.user.name,
        userAvatar: conversation.user.avatar,
        userUsername: conversation.user.username,
        isOnline: conversation.user.isOnline.toString(),
        conversationId: conversation.id,
      },
    });
  };

  const formatLastMessage = (conversation: ChatConversation) => {
    const { lastMessage } = conversation;

    switch (lastMessage.type) {
      case "audio":
        return "🎵 Audio message";
      case "image":
        return "📷 Photo";
      default:
        return lastMessage.text;
    }
  };

  const formatTime = (updatedAt: string) => {
    const now = new Date();
    const messageTime = new Date(updatedAt);
    const diffMs = now.getTime() - messageTime.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return "now";
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return messageTime.toLocaleDateString();
  };

  const renderConversation = ({
    item: conversation,
  }: {
    item: ChatConversation;
  }) => {
    const hasUnread = conversation.unreadCount > 0;

    return (
      <TouchableOpacity
        key={conversation.id}
        style={{ width: "100%", marginVertical: 15, height: "auto" }}
        onPress={() => handleConversationPress(conversation)}
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
                source={{ uri: conversation.user.avatar }}
              />
              {conversation.user.isOnline && (
                <S.ContainerBadge>
                  <S.Badge />
                </S.ContainerBadge>
              )}
            </S.ContainerAvatar>

            <S.ContainerText>
              <S.Title numberOfLines={1} color={Colors[theme].text}>{conversation.user.name}</S.Title>
              <S.Text numberOfLines={2} color={Colors[theme].text}>
                {formatLastMessage(conversation)}
              </S.Text>
            </S.ContainerText>

            <S.TimeContainer>
              <S.Text color="#999494" style={{ fontSize: 12 }}>
                {formatTime(conversation.updatedAt)}
              </S.Text>
              {hasUnread && (
                <>
                  <S.BadgeBlue>
                    <S.Text
                      color="#fff"
                      style={{ fontSize: 10, fontWeight: "bold" }}
                    >
                      {conversation.unreadCount}
                    </S.Text>
                  </S.BadgeBlue>
                </>
              )}
            </S.TimeContainer>
          </S.ContainerUser>
        </S.ContainerMessage>
      </TouchableOpacity>
    );
  };

  return (
    <Layout titleHeader="yankee">
      <S.Container bg_color={Colors[theme].background}>
        <S.ContainerTabs>
          <S.Tabs >
            {[
              { id: 1, label: "Principal" },
              { id: 2, label: "Chat requests" },
            ].map((tab) => (
              <S.Tab key={tab.id} onPress={() => setTabActive(tab.id)}>
                <S.Text tabs color={tabActive === tab.id ? theme === "dark" ? Colors.dark.text : Colors.light.text : "#848383"}>
                  {tab.label}
                  {tab.id === 1 && unreadCounts.mainConversations > 0 && (
                    <S.UnreadBadge>
                      <S.UnreadText>
                        {unreadCounts.mainConversations}
                      </S.UnreadText>
                    </S.UnreadBadge>
                  )}
                  {tab.id === 2 && unreadCounts.chatRequests > 0 && (
                    <S.UnreadBadge>
                      <S.UnreadText>{unreadCounts.chatRequests}</S.UnreadText>
                    </S.UnreadBadge>
                  )}
                </S.Text>
              </S.Tab>
            ))}
          </S.Tabs>
        </S.ContainerTabs>

        {/* Search */}
        <S.ContainerInput>
          <S.SearchIcon name="search" size={20} color="#777" />
          <S.StyledInput
            placeholder={`Search ${
              tabActive === 1 ? "conversations" : "requests"
            }...`}
            value={text}
            onChangeText={setText}
          />
        </S.ContainerInput>

        {/* Lista de conversas */}
        <FlatList
          data={conversations}
          keyExtractor={(item) => item.id}
          renderItem={renderConversation}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 20,
            flexGrow: 1,
          }}
          ListEmptyComponent={
            <S.EmptyStateContainer>
              <S.Text
                color="#999494"
                style={{ textAlign: "center", marginTop: 50 }}
              >
                {text.trim()
                  ? "No results found"
                  : tabActive === 1
                  ? "No conversations yet"
                  : "No chat requests"}
              </S.Text>
            </S.EmptyStateContainer>
          }
        />
      </S.Container>
    </Layout>
  );
};
