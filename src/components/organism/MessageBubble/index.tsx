import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";
import { MessageBubbleProps } from "./@types";
import {  Pause } from "@/assets/icons";

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  id,
  text,
  isSender,
  timestamp,
  type,
  audioUri: _audioUri,
  audioStatus,
  audioDuration,
  imageUri,
  onAudioPlay,
  onAudioPause,
}) => {
  const handleAudioPress = () => {
    if (audioStatus === "playing") {
      onAudioPause?.(id);
    } else {
      onAudioPlay?.(id);
    }
  };

  const renderAudioWaveform = () => {
    // Usar o ID da mensagem como seed para gerar waveform consistente
    const seed = parseInt(id.replace(/\D/g, "")) || 1;
    const seededRandom = (index: number) => {
      // Gerador pseudo-random baseado no ID + índice
      const x = Math.sin(seed + index) * 10000;
      return x - Math.floor(x);
    };

    const bars = Array.from({ length: 20 }, (_, i) => {
      const height = seededRandom(i) * 15 + 5; // Entre 5 e 20
      const isActive = audioStatus === "playing";

      return (
        <S.AudioBar
          key={i}
          height={height}
          style={{
            backgroundColor: isActive ? (isSender ? "rgba(255,255,255,0.8)" : "#0084FF") : "#ffffff",
          }}
        />
      );
    });
    return bars;
  };

  const renderContent = () => {
    switch (type) {
      case "image":
        return (
          <>
            {imageUri && (
              <TouchableOpacity>
                <S.ImageMessage source={{ uri: imageUri }} resizeMode="cover" />
              </TouchableOpacity>
            )}
            {text && <S.MessageText isSender={isSender}>{text}</S.MessageText>}
          </>
        );

      case "audio":
        return (
          <S.AudioContainer>
            <S.containerAudioButton>
              <S.AudioPlayButton onPress={handleAudioPress}>
                {audioStatus === "playing" ? <Pause color={isSender ? "#ffffff" : "#ffffff"} /> : <S.ButtonPlay />}
              </S.AudioPlayButton>

              <S.AudioWaveform>{renderAudioWaveform()}</S.AudioWaveform>
            </S.containerAudioButton>
            <S.AudioDuration isSender={isSender}>
              {audioDuration
                ? `${Math.floor(audioDuration / 60)}:${(audioDuration % 60).toString().padStart(2, "0")}`
                : "0:00"}
            </S.AudioDuration>
          </S.AudioContainer>
        );

      default:
        return <S.MessageText isSender={isSender}>{text}</S.MessageText>;
    }
  };

  const isImageOnly = type === "image" && !text;

  return (
    <S.MessageContainer isSender={isSender}>
      <S.MessageBubbleWrapper isSender={isSender}>
        {isImageOnly ? (
          // Image-only messages: no bubble background, just the image
          renderContent()
        ) : (
          // Text or mixed messages: normal bubble styling
          <>
            <S.MessageBubble isSender={isSender}>{renderContent()}</S.MessageBubble>
            <S.MessagePointer isSender={isSender} />
          </>
        )}
      </S.MessageBubbleWrapper>
      <S.TimeText isSender={isSender}>{timestamp}</S.TimeText>
    </S.MessageContainer>
  );
};
