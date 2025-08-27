import React, { useState } from "react";
import { Modal, StatusBar } from "react-native";
import { Video, ResizeMode } from "expo-av";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import * as S from "./styles";
import { IMediaViewer } from "./@types";
import { Loading } from "@/components/elements";

export const MediaViewer = ({ visible, mediaItem, onClose }: IMediaViewer) => {
  const [isLoading, setIsLoading] = useState(true);
  const AnimatedContainer = Animated.createAnimatedComponent(S.Container);

  if (!mediaItem) return null;

  const handleLoadStart = () => setIsLoading(true);
  const handleLoadEnd = () => setIsLoading(false);

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
              source={{ uri: mediaItem.video }}
              style={{ width: '100%', height: '70%' }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay={false}
              onLoadStart={handleLoadStart}
              onLoad={handleLoadEnd}
            />
          )}
        </S.MediaContainer>
      </AnimatedContainer>
    </Modal>
  );
};