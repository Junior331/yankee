import { useRouter } from "expo-router";
import React, { useState, useMemo, useEffect } from "react";
import { Image, TouchableOpacity, FlatList } from "react-native";

import * as S from "./styles";
import Colors from "@/constants/Colors";
import { mocks } from "@/services/mocks";
import { Layout } from "@/components/organism";
import { useTheme } from "@/contexts/ThemeContext";
import { ChatConversation } from "@/services/mocks/users";

export const Messages = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [text, setText] = useState("");
  const [tabActive, setTabActive] = useState(1); // 1 = Principal, 2 = Chat Requests

  // Fallback data for testing
  const fallbackConversations = [
    {
      id: 'test_1',
      user: {
        id: 'user_test_1',
        name: 'Test User 1',
        username: '@testuser1',
        avatar: 'https://i.pravatar.cc/400?img=1',
        isOnline: true,
      },
      lastMessage: {
        id: 'msg_test_1',
        text: 'This is a test message',
        isSender: false,
        timestamp: '2:30 PM',
        type: 'text',
      },
      unreadCount: 2,
      updatedAt: new Date().toISOString(),
      type: 'accepted',
      messages: [],
    },
    {
      id: 'test_2',
      user: {
        id: 'user_test_2',
        name: 'Test User 2',
        username: '@testuser2',
        avatar: 'https://i.pravatar.cc/400?img=2',
        isOnline: false,
      },
      lastMessage: {
        id: 'msg_test_2',
        text: 'Another test message',
        isSender: true,
        timestamp: '1:30 PM',
        type: 'text',
      },
      unreadCount: 0,
      updatedAt: new Date().toISOString(),
      type: 'accepted',
      messages: [],
    },
  ];

  // Simplified unread management to prevent loops
  const [unreadCounts, setUnreadCounts] = useState({
    mainConversations: 3,
    chatRequests: 4,
    total: 7
  });

  const markConversationAsRead = async (conversationId: string) => {
    // Simple implementation without loops
    // TODO: Implement proper unread message handling
  };

  // Filtrar conversas baseado na aba ativa
  const conversations = useMemo(() => {
    let allConversations;

    // Use mocks if available, otherwise use fallback
    if (mocks.mainConversations && mocks.chatRequests) {
      allConversations = tabActive === 1 ? mocks.mainConversations : mocks.chatRequests;
    } else {
      allConversations = tabActive === 1 ? fallbackConversations : [];
    }

    if (!allConversations || allConversations.length === 0) {
      return fallbackConversations;
    }

    if (!text.trim()) return allConversations;

    // Filtrar por texto de busca
    return allConversations.filter(
      (conv) =>
        conv.user.name.toLowerCase().includes(text.toLowerCase()) ||
        conv.user.username.toLowerCase().includes(text.toLowerCase()) ||
        conv.lastMessage.text.toLowerCase().includes(text.toLowerCase())
    );
  }, [tabActive, text, fallbackConversations]);

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
                <S.BadgeBlue>
                  <S.Text
                    color="#fff"
                    style={{ fontSize: 10, fontWeight: "bold" }}
                  >
                    {conversation.unreadCount}
                  </S.Text>
                </S.BadgeBlue>
              )}
            </S.TimeContainer>
          </S.ContainerUser>
        </S.ContainerMessage>
      </TouchableOpacity>
    );
  };

  return (
    <Layout titleHeader="yankee">
      <S.Container bg_color={Colors[theme].background} style={{ flex: 1 }}>
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
