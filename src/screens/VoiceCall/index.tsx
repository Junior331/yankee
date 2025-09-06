import React, { useState, useEffect, useCallback } from "react";
import { Image, TouchableOpacity, Vibration } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useCallContext } from "@/contexts/CallContext";

import * as S from "./styles";
import { Phone, LeftArrow, ChatDuringCall, PhoneCall, SpeakerIcon, MicrophoneOff } from "@/assets/icons";
import { Microphone } from "@/assets/icons";
import { Layout } from "@/components/organism";
import Video from "@/assets/icons/Video";

export const VoiceCall = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { 
    startCall, 
    endCall, 
    minimizeCall, 
    updateCallDuration, 
    updateCallSettings,
    isCallMinimized 
  } = useCallContext();

  const [callDuration, setCallDuration] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);

  const userName = (params.userName as string) || "User";
  const userAvatar = (params.userAvatar as string) || "https://i.pravatar.cc/400?img=1";
  const userUsername = (params.userUsername as string) || "@user";

  const contactName = (params.contactName as string) || "Ryan Brooks";
  const contactAvatar =
    (params.contactAvatar as string) ||
    "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__";
  const isIncoming = params.isIncoming === "true";

  // Initialize call when component mounts
  useEffect(() => {
    startCall({
      contactName,
      contactAvatar,
    });
  }, [contactName, contactAvatar]);

  useEffect(() => {
    if (isIncoming) {
      const interval = setInterval(() => {
        Vibration.vibrate(1000);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isIncoming]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isConnected) {
      interval = setInterval(() => {
        setCallDuration((prev) => {
          const newDuration = prev + 1;
          updateCallDuration(newDuration);
          return newDuration;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isConnected, updateCallDuration]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerCall = () => {
    setIsConnected(true);
    updateCallSettings({ isConnected: true });
    Vibration.cancel();
  };

  const handleEndCall = () => {
    Vibration.cancel();
    endCall();
    router.back();
  };

  const handleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    updateCallSettings({ isMuted: newMuteState });
  };

  const handleSpeaker = () => {
    const newSpeakerState = !isSpeakerOn;
    setIsSpeakerOn(newSpeakerState);
    updateCallSettings({ isSpeakerOn: newSpeakerState });
  };

  const handleGoBack = () => {
    router.back();
  };

  const getHeaderStatus = () => {
    if (!isConnected && !isIncoming) return "Calling...";
    if (isIncoming && !isConnected) return "Incoming call...";
    if (isConnected) return formatDuration(callDuration);
    return null;
  };

  const handleVideoCall = useCallback(() => {
    router.push({
      pathname: "/video-call",
      params: {
        contactName: userName,
        contactAvatar: userAvatar,
        contactUsername: userUsername,
        isIncoming: "false",
      },
    });
  }, [router, userName, userAvatar, userUsername]);

  const handleMinimizeCall = () => {
    minimizeCall();
    router.back();
  };

  // Se a ligação foi minimizada pelo contexto, apenas voltar
  if (isCallMinimized) {
    return null;
  }

  return (
    <Layout titleHeader="yankee" isShowHeader={false}>
      <S.Container>
        <S.Header>
          <S.BackButton onPress={handleGoBack}>
            <LeftArrow color="#ffffff" />
          </S.BackButton>
          {getHeaderStatus() && <S.HeaderCallDuration>{getHeaderStatus()}</S.HeaderCallDuration>}
          <TouchableOpacity onPress={handleMinimizeCall}>
            <ChatDuringCall />
          </TouchableOpacity>
        </S.Header>

        <S.Content>
          <S.ContactInfo>
            <S.ContactAvatar>
              <Image source={{ uri: contactAvatar }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
            </S.ContactAvatar>

            <S.ContactName>{contactName}</S.ContactName>
            <S.ContainerVoiceCall>
              <Video color="#1976D2" />
              <S.VoiceCall>Voice Call</S.VoiceCall>
            </S.ContainerVoiceCall>
          </S.ContactInfo>

          {isIncoming && !isConnected ? (
            <S.IncomingCallActions>
              <S.ActionButton variant="danger" onPress={handleEndCall}>
                <Phone color="#ffffff" />
              </S.ActionButton>
              <S.ActionButton variant="primary" onPress={handleAnswerCall}>
                <Phone color="#ffffff" />
              </S.ActionButton>
            </S.IncomingCallActions>
          ) : (
            <S.CallActions>
              <S.SpeakerIconButton onPress={handleSpeaker}>
                <SpeakerIcon color={isSpeakerOn ? "#FF3B30" : "#ffffff"} />
              </S.SpeakerIconButton>

              <TouchableOpacity onPress={handleVideoCall}>
                <Video width={30} height={30} />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleMute}>
                {isMuted ? <Microphone width={30} height={30} /> : <MicrophoneOff width={30} height={30} />}
              </TouchableOpacity>

              <S.ActionButton variant="danger" onPress={handleEndCall}>
                <PhoneCall color="#ffffff" />
              </S.ActionButton>
            </S.CallActions>
          )}
        </S.Content>
      </S.Container>
    </Layout>
  );
};
