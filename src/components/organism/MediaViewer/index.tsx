import React, { useState, useRef } from "react";
import { Modal, StatusBar } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import * as S from "./styles";
import { IMediaViewer } from "./@types";
import { Loading } from "@/components/elements";

export const MediaViewer = ({ visible, mediaItem, onClose }: IMediaViewer) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<Video>(null);
  const AnimatedContainer = Animated.createAnimatedComponent(S.Container);

  if (!mediaItem) return null;

  // Reset loading when modal opens
  React.useEffect(() => {
    if (visible) {
      setIsLoading(true);
    }
  }, [visible, mediaItem]);

  const handleLoadStart = () => setIsLoading(true);
  const handleLoadEnd = () => setIsLoading(false);
  
  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <StatusBar hidden />
      <AnimatedContainer entering={FadeIn} exiting={FadeOut}>
        <S.CloseButton onPress={onClose}>
          <S.CloseText>×</S.CloseText>
        </S.CloseButton>

        <S.MediaContainer>
          {isLoading && (
            <S.LoadingContainer>
              <Loading />
            </S.LoadingContainer>
          )}
          
          {mediaItem.type === 'image' ? (
            <S.FullScreenImage
              source={{ uri: mediaItem.image }}
              onLoadStart={handleLoadStart}
              onLoadEnd={handleLoadEnd}
            />
          ) : (
            <Video
              ref={videoRef}
              source={{ uri: mediaItem.video || '' }}
              style={{ width: '100%', height: '70%' }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay={false}
              isLooping={false}
              onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
              onLoadStart={handleLoadStart}
              onError={(error) => {
                console.log('Video error:', error);
                setIsLoading(false);
              }}
            />
          )}
        </S.MediaContainer>
      </AnimatedContainer>
    </Modal>
  );
};