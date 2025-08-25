import React, { useState, useEffect, useRef } from "react";
import { Image, Vibration, StatusBar } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

import * as S from "./styles";
import Video from "@/assets/icons/Video";
import { Phone, Microphone } from "@/assets/icons";
import { Camera as CameraIcon } from "@/assets/icons";

export const VideoCall = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();

  const [callDuration, setCallDuration] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [cameraType, setCameraType] = useState<CameraType>('front');

  const contactName = params.contactName as string || "Ryan Brooks";
  const contactAvatar = params.contactAvatar as string || "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__";
  const contactUsername = params.contactUsername as string || "@Ryan_brooks";
  const isIncoming = params.isIncoming === 'true';

  // Solicitar permissão da câmera
  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission, requestPermission]);

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

  const handleToggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const handleSwitchCamera = () => {
    setCameraType(current => (current === 'back' ? 'front' : 'back'));
  };

  // const handleMinimize = () => {
  // Implementar lógica de minimizar - pode usar picture-in-picture
  // console.log("Minimize video call");
  // };

  const getCallStatus = () => {
    if (isIncoming && !isConnected) return "Incoming video call...";
    if (!isConnected) return "Connecting...";
    return "";
  };

  if (isIncoming && !isConnected) {
    return (
      <S.Container>
        <StatusBar hidden />
        <S.VideoBackground
          source={{ uri: contactAvatar }}
          blurRadius={20}
        >
          <S.IncomingCallOverlay>
            <S.IncomingContactInfo>
              <S.IncomingAvatar>
                <Image
                  source={{ uri: contactAvatar }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </S.IncomingAvatar>

              <S.IncomingContactName>{contactName}</S.IncomingContactName>
              <S.IncomingContactUsername>{contactUsername}</S.IncomingContactUsername>
              <S.IncomingCallStatus>{getCallStatus()}</S.IncomingCallStatus>
            </S.IncomingContactInfo>

            <S.IncomingCallActions>
              <S.ActionButton variant="danger" onPress={handleEndCall}>
                <Phone color="#ffffff" />
              </S.ActionButton>

              <S.ActionButton variant="primary" onPress={handleAnswerCall}>
                <Video color="#ffffff" />
              </S.ActionButton>
            </S.IncomingCallActions>
          </S.IncomingCallOverlay>
        </S.VideoBackground>
      </S.Container>
    );
  }

  if (!permission?.granted) {
    return (
      <S.Container>
        <StatusBar hidden />
        <S.IncomingCallOverlay>
          <S.IncomingContactInfo>
            <S.IncomingContactName>Camera Permission Required</S.IncomingContactName>
            <S.IncomingContactUsername>Please allow camera access to continue video call</S.IncomingContactUsername>
          </S.IncomingContactInfo>
          <S.IncomingCallActions>
            <S.ActionButton variant="primary" onPress={requestPermission}>
              <CameraIcon color="#ffffff" />
            </S.ActionButton>
            <S.ActionButton variant="danger" onPress={handleEndCall}>
              <Phone color="#ffffff" />
            </S.ActionButton>
          </S.IncomingCallActions>
        </S.IncomingCallOverlay>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.VideoBackground
        source={{ uri: contactAvatar }}
        blurRadius={isConnected ? 0 : 10}
      >

        <S.CallInfo>
          <S.ContactName>{contactName}</S.ContactName>
          {isConnected ? (
            <S.CallDuration>{formatDuration(callDuration)}</S.CallDuration>
          ) : (
            <S.CallStatus>{getCallStatus()}</S.CallStatus>
          )}
        </S.CallInfo>

        <S.SelfVideoContainer>
          {isVideoOn && permission?.granted ? (
            <CameraView
              ref={cameraRef}
              style={{ width: "100%", height: "100%" }}
              facing={cameraType}
            />
          ) : (
            <S.SelfVideo>
              <S.SelfVideoPlaceholder>
                {!permission?.granted ? "No Permission" : "Camera Off"}
              </S.SelfVideoPlaceholder>
            </S.SelfVideo>
          )}
        </S.SelfVideoContainer>

        <S.BottomControls>
          <S.CallActions>
            <S.ActionButton
              variant={isMuted ? "danger" : "secondary"}
              onPress={handleMute}
            >
              <Microphone color="#ffffff" />
            </S.ActionButton>

            <S.ActionButton variant="danger" onPress={handleEndCall}>
              <Phone color="#ffffff" />
            </S.ActionButton>

            <S.ActionButton
              variant={isVideoOn ? "secondary" : "danger"}
              onPress={handleToggleVideo}
            >
              <CameraIcon color="#ffffff" />
            </S.ActionButton>

            <S.ActionButton variant="secondary" onPress={handleSwitchCamera}>
              <Video color="#ffffff" />
            </S.ActionButton>
          </S.CallActions>
        </S.BottomControls>
      </S.VideoBackground>
    </S.Container>
  );
};