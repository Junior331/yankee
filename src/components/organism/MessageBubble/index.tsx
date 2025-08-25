import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";
import { MessageBubbleProps } from "./@types";
import { Phone, Microphone } from "@/assets/icons";

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  id,
  text,
  isSender,
  timestamp,
  type,
  audioUri,
  audioStatus,
  audioDuration,
  imageUri,
  onAudioPlay,
  onAudioPause,
}) => {
  const handleAudioPress = () => {
    if (audioStatus === 'playing') {
      onAudioPause?.(id);
    } else {
      onAudioPlay?.(id);
    }
  };

  const renderAudioWaveform = () => {
    const bars = Array.from({ length: 20 }, (_, i) => (
      <S.AudioBar 
        key={i} 
        height={Math.random() * 20 + 5} 
      />
    ));
    return bars;
  };

  const renderContent = () => {
    switch (type) {
      case 'image':
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

      case 'audio':
        return (
          <S.AudioContainer>
            <S.AudioPlayButton onPress={handleAudioPress}>
              {audioStatus === 'playing' ? (
                <Phone color={isSender ? "#ffffff" : "#0084FF"} />
              ) : (
                <Microphone color={isSender ? "#ffffff" : "#0084FF"} />
              )}
            </S.AudioPlayButton>
            
            <S.AudioWaveform>
              {renderAudioWaveform()}
            </S.AudioWaveform>

            <S.AudioDuration isSender={isSender}>
              {audioDuration ? `${Math.floor(audioDuration / 60)}:${(audioDuration % 60).toString().padStart(2, '0')}` : '0:00'}
            </S.AudioDuration>
          </S.AudioContainer>
        );

      default:
        return <S.MessageText isSender={isSender}>{text}</S.MessageText>;
    }
  };

  return (
    <S.MessageContainer isSender={isSender}>
      <S.MessageBubbleWrapper isSender={isSender}>
        <S.MessageBubble isSender={isSender}>
          {renderContent()}
        </S.MessageBubble>
        <S.MessagePointer isSender={isSender} />
      </S.MessageBubbleWrapper>
      <S.TimeText isSender={isSender}>{timestamp}</S.TimeText>
    </S.MessageContainer>
  );
};