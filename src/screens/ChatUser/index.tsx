import React, { useCallback, useRef } from "react";
import { useRouter } from "expo-router";
import { Image, ScrollView, TouchableOpacity, Text } from "react-native";

import * as S from "./styles";
import Video from "@/assets/icons/Video";
import {
  Galery,
  HeadPhones,
  LeftArrow,
  Library,
  MapPin,
  Menu,
  Microphone,
  MoodSmile,
  Phone,
  Sparkles,
} from "@/assets/icons";
import PaperClip from "@/assets/icons/PaperClip";
import Camera from "@/assets/icons/Camera";
import BottomSheet from "@gorhom/bottom-sheet";
import { GenericBottomSheet } from "@/components/organism";

interface Message {
  id: number;
  text: string;
  isSender: boolean;
  timestamp: string;
  type: "text" | "audio" | "image";
  audioUrl?: string;
  imageUrl?: string;
}

export const ChatUser = () => {
  const router = useRouter();
  const [message, setMessage] = React.useState("");
  const bottomSheetRef = useRef<BottomSheet>(null);

  const messages: Message[] = [
    {
      id: 1,
      text: "Dude, guess what just happened",
      isSender: false,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 2,
      text: "Spill ",
      isSender: true,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 3,
      text: "I was walking to class and totally tripped over my own shoelace… in front of everyone.",
      isSender: false,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 4,
      text: "LMAO noooo are u ok tho??",
      isSender: true,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      isSender: false,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 6,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      isSender: true,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 7,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      isSender: true,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 8,
      text: "NO WAY hahah",
      isSender: false,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 9,
      text: "Good morning bestiee <3",
      isSender: true,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 10,
      text: "Good Morning <33",
      isSender: false,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 11,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      isSender: false,
      timestamp: "10:20 AM",
      type: "text",
    },
    {
      id: 12,
      text: "See this ",
      isSender: false,
      timestamp: "10:23 AM",
      type: "text",
    },
    {
      id: 12,
      text: "Tell me we weren’t just talking about this??",
      isSender: false,
      timestamp: "09:20 AM",
      type: "text",
    },
  ];

  const handleSnapPress = useCallback(() => {
    handleChangeSize(0);
  }, []);

  const handleChangeSize = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  return (
    <>
      <S.Container>
        <S.ContainerHeader>
          <S.ButtonIcon onPress={() => router.push("/(tabs)/messages")}>
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
              <TouchableOpacity>
                <Phone />
              </TouchableOpacity>
              <TouchableOpacity>
                <Video />
              </TouchableOpacity>
              <TouchableOpacity>
                <Menu />
              </TouchableOpacity>
            </S.ContainerIcons>
          </S.ContainerUser>
        </S.ContainerHeader>

        <S.ChatContainer>
          <ScrollView>
            {messages.map((msg) => (
              <S.MessageContainer key={msg.id} isSender={msg.isSender}>
                <S.MessageBubbleWrapper isSender={msg.isSender}>
                  <S.MessageBubble isSender={msg.isSender}>
                    <S.MessageText isSender={msg.isSender}>{msg.text}</S.MessageText>
                  </S.MessageBubble>
                  <S.MessagePointer isSender={msg.isSender} />
                </S.MessageBubbleWrapper>
                <S.TimeText isSender={msg.isSender}>{msg.timestamp}</S.TimeText>
              </S.MessageContainer>
            ))}
          </ScrollView>
        </S.ChatContainer>

        <S.InputContainer>
          <S.AttachmentButton>
            <TouchableOpacity onPress={() => handleSnapPress()}>
              <PaperClip />
            </TouchableOpacity>
            <TouchableOpacity>
              <Camera />
            </TouchableOpacity>
            <TouchableOpacity>
              <MoodSmile />
            </TouchableOpacity>
          </S.AttachmentButton>

          <S.Input placeholder="Text Here" placeholderTextColor="#ffff" value={message} onChangeText={setMessage} />
          <S.VoiceButton>
            <Microphone />
          </S.VoiceButton>
        </S.InputContainer>
      </S.Container>
      <GenericBottomSheet ref={bottomSheetRef} size={-1}>
        <S.ContentModal>
          <S.ContainerPaperClip>
            <S.ContainerFunctionality>
              <TouchableOpacity style={{ gap: 15, alignItems: "center" }}>
                <Sparkles />
                <Text style={{ fontSize: 13, color: "#ffffff", fontWeight: "400" }}>GIF</Text>
              </TouchableOpacity>
            </S.ContainerFunctionality>
            <S.ContainerFunctionality>
              <TouchableOpacity style={{ gap: 15, alignItems: "center" }}>
                <Galery />
                <Text style={{ fontSize: 13, color: "#ffffff", fontWeight: "400" }}>Galery</Text>
              </TouchableOpacity>
            </S.ContainerFunctionality>
            <S.ContainerFunctionality>
              <TouchableOpacity style={{ gap: 15, alignItems: "center" }}>
                <HeadPhones />
                <Text style={{ fontSize: 13, color: "#ffffff", fontWeight: "400" }}>Audio</Text>
              </TouchableOpacity>
            </S.ContainerFunctionality>
            <S.ContainerFunctionality>
              <TouchableOpacity style={{ gap: 15, alignItems: "center" }}>
                <Library />
                <Text style={{ fontSize: 13, color: "#ffffff", fontWeight: "400" }}>Document</Text>
              </TouchableOpacity>
            </S.ContainerFunctionality>
            <S.ContainerFunctionality>
              <TouchableOpacity style={{ gap: 15, alignItems: "center" }}>
                <MapPin />
                <Text style={{ fontSize: 13, color: "#ffffff", fontWeight: "400" }}>Location</Text>
              </TouchableOpacity>
            </S.ContainerFunctionality>
          </S.ContainerPaperClip>
        </S.ContentModal>
      </GenericBottomSheet>
    </>
  );
};
