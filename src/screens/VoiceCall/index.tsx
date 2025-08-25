import React, { useState, useEffect } from "react";
import { Image, Vibration } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import * as S from "./styles";
import { Phone } from "@/assets/icons";
import { Microphone, MoodSmile } from "@/assets/icons";
import { SafeScreen } from "@/components/elements";

export const VoiceCall = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [callDuration, setCallDuration] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);

  const contactName = params.contactName as string || "Ryan Brooks";
  const contactAvatar = params.contactAvatar as string || "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__";
  const contactUsername = params.contactUsername as string || "@Ryan_brooks";
  const isIncoming = params.isIncoming === 'true';

  useEffect(() => {
    if (isIncoming) {
      // Simula toque de chamada recebida
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
        setCallDuration(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isConnected]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerCall = () => {
    setIsConnected(true);
    Vibration.cancel();
  };

  const handleEndCall = () => {
    Vibration.cancel();
    router.back();
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSpeaker = () => {
    setIsSpeaker(!isSpeaker);
  };

  const getCallStatus = () => {
    if (isIncoming && !isConnected) return "Incoming call...";
    if (!isConnected) return "Calling...";
    return "Connected";
  };

  return (
    <SafeScreen edges={[]}>
      <S.Container>
        <S.BackgroundGradient
          colors={['rgba(52, 199, 89, 0.3)', 'rgba(0, 0, 0, 0.8)']}
          start={[0, 0]}
          end={[0, 1]}
        />
        
        <S.Content>
          <S.ContactInfo>
            <S.ContactAvatar>
              <Image
                source={{ uri: contactAvatar }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </S.ContactAvatar>
            
            <S.ContactName>{contactName}</S.ContactName>
            <S.ContactUsername>{contactUsername}</S.ContactUsername>
            
            <S.CallStatus>{getCallStatus()}</S.CallStatus>
            
            {isConnected && (
              <S.CallDuration>{formatDuration(callDuration)}</S.CallDuration>
            )}
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
              <S.MuteButton onPress={handleMute}>
                <Microphone color={isMuted ? "#FF3B30" : "#ffffff"} />
              </S.MuteButton>
              
              <S.ActionButton variant="danger" onPress={handleEndCall}>
                <Phone color="#ffffff" />
              </S.ActionButton>
              
              <S.SpeakerButton onPress={handleSpeaker}>
                <MoodSmile color={isSpeaker ? "#34C759" : "#ffffff"} />
              </S.SpeakerButton>
            </S.CallActions>
          )}
        </S.Content>
      </S.Container>
    </SafeScreen>
  );
};