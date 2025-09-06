import React, { useEffect } from "react";
import * as S from "./styles";
import { SubHeader } from "@/components/organism";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity, Alert } from "react-native";
import { useNotificationsContext } from "@/contexts/NotificationsContext";
import { SafeScreen } from "@/components/elements";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

const ButtonReply = () => {
    const { theme } = useTheme();

  return (
    <S.ButtonFollow bg_color={Colors[theme].text}>
      <S.Text
        color={Colors[theme].background}
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
    const { theme } = useTheme();
  
  // Social notifications system
  const { 
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    clearAllNotifications
  } = useNotificationsContext();
  
  // Start auto-generating demo notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const types = ['like', 'follow', 'comment', 'poke', 'story'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      // 20% chance every 45 seconds
      if (Math.random() < 0.2) {
        addNotification(randomType, undefined, true);
      }
    }, 45000); // Every 45 seconds

    return () => clearInterval(interval);
  }, [addNotification]);
  
  // Test notification function
  const testNotification = () => {
    Alert.alert(
      "Test Notification",
      "Choose notification type:",
      [
        {
          text: "❤️ Like",
          onPress: () => addNotification('like', 'Sarah Chen')
        },
        {
          text: "👤 Follow", 
          onPress: () => addNotification('follow', 'Alex Johnson')
        },
        {
          text: "💬 Comment",
          onPress: () => addNotification('comment', 'Elena Rodriguez')
        },
        {
          text: "👉 Poke",
          onPress: () => addNotification('poke', 'Ryan Brooks')
        },
        {
          text: "👁️ Story View",
          onPress: () => addNotification('story', 'Sophie Martin')
        },
        { text: "Cancel", style: "cancel" }
      ]
    );
  };

  return (
    <SafeScreen edges={['top', 'left', 'right']}>
      <S.Container  bg_color={Colors[theme].background}>
        <S.HeaderContainer>
          <S.TitleContainer>
            <SubHeader title={"Notifications"} handleOnPress={() => router.back()} />
            {unreadCount > 0 && (
              <S.UnreadBadge>
                <S.Text style={{ fontSize: 10, color: '#fff', fontWeight: 'bold' }}>
                  {unreadCount}
                </S.Text>
              </S.UnreadBadge>
            )}
          </S.TitleContainer>
        </S.HeaderContainer>

      <S.ContainerList>
        {notifications.map((message) => {
          const lastMessage = message.messages[message.messages.length - 1];
          return (
            <TouchableOpacity
              key={message.id}
              style={{ 
                padding: 10,
                width: "100%", 
                height: "auto",
                borderRadius: 10,
                marginVertical: 5, 
                opacity: message.read ? 0.6 : 1,
                backgroundColor: message.read ? 'transparent' : Colors[theme].mg_bubble
              }}
              onPress={() => markAsRead(message.id)}
            >
              <S.ContainerMessage >
                <S.ContainerUser >
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
                    <S.Title numberOfLines={1} color={Colors[theme].text}>{message.name}</S.Title>
                    <S.Text numberOfLines={2} color={Colors[theme].text}>
                      {lastMessage}
                    </S.Text>
                  </S.ContainerText>

                  {message.active ? <ButtonReply  /> : <ButtonImagem />}
                </S.ContainerUser>
              </S.ContainerMessage>
            </TouchableOpacity>
          );
        })}
        
        <S.TestButtonsContainer>
          <TouchableOpacity 
            onPress={testNotification}
            style={{ 
              backgroundColor: '#ff6b35', 
              paddingHorizontal: 16, 
              paddingVertical: 12, 
              borderRadius: 20,
              marginBottom: 10,
              alignItems: 'center',
              width: '100%'
            }}
          >
            <S.Text style={{ fontSize: 14, color: '#fff', fontWeight: '600' }}>🔔 Test Notification</S.Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={clearAllNotifications}
            style={{ 
              backgroundColor: '#666', 
              paddingHorizontal: 16, 
              paddingVertical: 10, 
              borderRadius: 20,
              alignItems: 'center',
              width: '100%'
            }}
          >
            <S.Text style={{ fontSize: 12, color: '#fff' }}>Clear All Notifications</S.Text>
          </TouchableOpacity>
        </S.TestButtonsContainer>
      </S.ContainerList>
      </S.Container>
    </SafeScreen>
  );
};
