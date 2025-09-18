import React, { useState, useRef } from "react";
import { Modal, StatusBar } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import * as S from "./styles";
import { IMediaViewer } from "./@types";
import { Loading } from "@/components/elements";

export const MediaViewer = ({ visible, mediaItem, onClose }: IMediaViewer) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<Video>(null);

  console.log('MediaViewer props:', { visible, mediaItem });

  if (!mediaItem) return null;

  // Reset error state when modal opens
  React.useEffect(() => {
    if (visible) {
      setHasError(false);
      setIsLoading(true);
    }
  }, [visible]);


  const handleLoadStart = () => setIsLoading(true);
  const handleLoadEnd = () => setIsLoading(false);
  
  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsLoading(false);
    }
  };

  try {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
        statusBarTranslucent
      >
        <StatusBar hidden />
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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
            mediaItem.image ? (
              <S.FullScreenImage
                source={{ uri: mediaItem.image }}
                onLoadStart={handleLoadStart}
                onLoadEnd={handleLoadEnd}
                onError={(error) => {
                  console.error('Image error:', error.nativeEvent?.error);
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            ) : (
              <S.ErrorContainer>
                <S.ErrorText>Image not available</S.ErrorText>
              </S.ErrorContainer>
            )
          ) : (
            mediaItem.video ? (
              <Video
                ref={videoRef}
                source={{ uri: mediaItem.video }}
                style={{ width: '100%', height: '70%' }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={false}
                isLooping={false}
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                onLoadStart={handleLoadStart}
                onError={(error) => {
                  console.error('Video error:', error);
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            ) : (
              <S.ErrorContainer>
                <S.ErrorText>Video not available</S.ErrorText>
              </S.ErrorContainer>
            )
          )}
        </S.MediaContainer>
        </Animated.View>
      </Modal>
    );
  } catch (error) {
    console.error('MediaViewer error:', error);
    return (
      <Modal
        visible={visible}
        transparent
        onRequestClose={onClose}
      >
        <S.Container>
          <S.CloseButton onPress={onClose}>
            <S.CloseText>×</S.CloseText>
          </S.CloseButton>
          <S.ErrorContainer>
            <S.ErrorText>Error loading media</S.ErrorText>
          </S.ErrorContainer>
        </S.Container>
      </Modal>
    );
  }
};