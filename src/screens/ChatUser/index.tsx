import React, { useCallback, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import { 
  Image, 
  FlatList, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import * as S from "./styles";
import Video from "@/assets/icons/Video";
import {
  LeftArrow,
  Menu,
  Phone,
} from "@/assets/icons";
import { MessageBubble, ChatInput } from "@/components/organism";
import { SafeScreen } from "@/components/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboardHeight } from "@/hooks/useKeyboardHeight";
import { useMessages } from "@/hooks/useMessages";
import { useAudioRecorder } from "@/hooks/useAudioRecorderSimple";

export const ChatUser = () => {
  const router = useRouter();
  const [message, setMessage] = React.useState("");
  const flatListRef = useRef<FlatList>(null);
  const insets = useSafeAreaInsets();
  const { isKeyboardVisible } = useKeyboardHeight();
  
  // Chat functionality
  const { 
    messages, 
    isLoading, 
    loadMessages, 
    sendMessage, 
    updateMessage 
  } = useMessages("ryan_brooks_chat");
  
  const { playSound, stopSound } = useAudioRecorder();

  useEffect(() => {
    loadMessages();
  }, [loadMessages]);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (messages.length > 0) {
        flatListRef.current?.scrollToIndex({ 
          index: messages.length - 1, 
          animated: true 
        });
      }
    }, 100);
  }, [messages.length]);

  useEffect(() => {
    if (isKeyboardVisible || messages.length) {
      scrollToBottom();
    }
  }, [isKeyboardVisible, messages.length, scrollToBottom]);

  const handleSendText = useCallback(async () => {
    if (message.trim()) {
      await sendMessage({ text: message.trim(), type: 'text' });
      setMessage('');
      scrollToBottom();
    }
  }, [message, sendMessage, scrollToBottom]);

  const handleSendImage = useCallback(async (imageUri: string) => {
    await sendMessage({ 
      text: '',
      type: 'image',
      imageUri,
    });
    scrollToBottom();
  }, [sendMessage, scrollToBottom]);

  const handleSendAudio = useCallback(async (audioUri: string, duration: number) => {
    await sendMessage({ 
      text: '',
      type: 'audio',
      audioUri,
      audioDuration: duration,
    });
    scrollToBottom();
  }, [sendMessage, scrollToBottom]);

  const handleAudioPlay = useCallback(async (messageId: string) => {
    const msg = messages.find(m => m.id === messageId);
    if (msg?.audioUri) {
      try {
        await updateMessage(messageId, { audioStatus: 'loading' });
        await playSound(msg.audioUri);
        await updateMessage(messageId, { audioStatus: 'playing' });
      } catch (error) {
        await updateMessage(messageId, { audioStatus: 'idle' });
      }
    }
  }, [messages, playSound, updateMessage]);

  const handleAudioPause = useCallback(async (messageId: string) => {
    try {
      await stopSound();
      await updateMessage(messageId, { audioStatus: 'paused' });
    } catch (error) {
      await updateMessage(messageId, { audioStatus: 'idle' });
    }
  }, [stopSound, updateMessage]);

  const handleVoiceCall = useCallback(() => {
    router.push({
      pathname: "/voice-call",
      params: {
        contactName: "Ryan Brooks",
        contactAvatar: "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__",
        contactUsername: "@Ryan_brooks",
        isIncoming: "false"
      }
    });
  }, [router]);

  const handleVideoCall = useCallback(() => {
    router.push({
      pathname: "/video-call",
      params: {
        contactName: "Ryan Brooks",
        contactAvatar: "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__",
        contactUsername: "@Ryan_brooks",
        isIncoming: "false"
      }
    });
  }, [router]);

  return (
    <SafeScreen edges={['top']}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS !== 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <S.Container>
          <S.ContainerHeader >
            <S.ButtonIcon onPress={() => router.back()}>
              <LeftArrow color="#ffffff" />
            </S.ButtonIcon>

            <S.ContainerUser>
              <S.ContainerAvatar>
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                  }}
                  resizeMode="cover"
                />
                <S.ContainerBadge>
                  <S.Badge />
                </S.ContainerBadge>
              </S.ContainerAvatar>

              <S.ContainerText>
                <S.Title numberOfLines={1}>Ryan Brooks</S.Title>
                <S.Text numberOfLines={2} color="#f2f2f2">
                  @Ryan_brooks
                </S.Text>
              </S.ContainerText>
              
              <S.ContainerIcons>
                <TouchableOpacity onPress={handleVoiceCall}>
                  <Phone />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleVideoCall}>
                  <Video />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Menu />
                </TouchableOpacity>
              </S.ContainerIcons>
            </S.ContainerUser>
          </S.ContainerHeader>

          {/* Messages */}
          {isLoading ? (
            <S.Text style={{ textAlign: 'center', marginTop: 50, flex: 1 }}>
              Loading messages...
            </S.Text>
          ) : (
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ 
                paddingHorizontal: 15,
                paddingBottom: 20,
                flexGrow: 1,
                justifyContent: messages.length === 0 ? 'center' : 'flex-start'
              }}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item: msg }) => (
                <MessageBubble
                  key={msg.id}
                  {...msg}
                  onAudioPlay={handleAudioPlay}
                  onAudioPause={handleAudioPause}
                />
              )}
              onScrollToIndexFailed={(info) => {
                const wait = new Promise(resolve => setTimeout(resolve, 500));
                wait.then(() => {
                  flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
                });
              }}
            />
          )}

          {/* Input fixo na parte inferior */}
          <ChatInput
            value={message}
            onChangeText={setMessage}
            onSendText={handleSendText}
            onSendImage={handleSendImage}
            onSendAudio={handleSendAudio}
            disabled={isLoading}
          />
        </S.Container>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};