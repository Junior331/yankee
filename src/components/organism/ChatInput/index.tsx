import React, { useState } from "react";
import { Alert } from "react-native";
import * as Haptics from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";
import { ChatInputProps } from "./@types";
import { PaperClip, Camera, Microphone, MoodSmile } from "@/assets/icons";
import { CommentSendIcon } from "@/assets/icons";
import { AudioRecordBar } from "../AudioRecordBar";

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChangeText,
  onSendText,
  onSendImage,
  onSendAudio,
  disabled = false,
}) => {
  const [isRecordingBarVisible, setIsRecordingBarVisible] = useState(false);

  const handleSendText = () => {
    if (value.trim()) {
      onSendText();
    }
  };

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant access to your photo library');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      onSendImage(result.assets[0].uri);
    }
  };

  const handleCameraCapture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Please grant access to your camera');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      onSendImage(result.assets[0].uri);
    }
  };

  const handleStartRecording = () => {
    setIsRecordingBarVisible(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleSendAudio = (uri: string, durationMs: number) => {
    setIsRecordingBarVisible(false);
    onSendAudio(uri, Math.floor(durationMs / 1000)); // Convert to seconds
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleCancelRecording = () => {
    setIsRecordingBarVisible(false);
  };

  // Se o AudioRecordBar estiver visível, mostrar apenas ele
  if (isRecordingBarVisible) {
    return (
      <S.Container>
        <AudioRecordBar
          onSendAudio={handleSendAudio}
          onCancel={handleCancelRecording}
        />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.InputContainer>
        <S.AttachmentButton onPress={handleImagePicker}>
          <PaperClip color="#ffffff" />
        </S.AttachmentButton>
        <S.AttachmentButton onPress={handleCameraCapture}>
          <Camera color="#ffffff" />
        </S.AttachmentButton>
        <S.AttachmentButton >
          <MoodSmile color="#ffffff" />
        </S.AttachmentButton>

        <S.Input
          value={value}
          onChangeText={onChangeText}
          placeholder="Type a message..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          multiline
          returnKeyType="send"
          onSubmitEditing={handleSendText}
          blurOnSubmit={false}
          editable={!disabled}
        />

        {value.trim() ? (
          <S.ActionButton variant="send" onPress={handleSendText} disabled={disabled}>
            <CommentSendIcon color="#ffffff" />
          </S.ActionButton>
        ) : (
          <S.ActionButton onPress={handleStartRecording} disabled={disabled}>
            <Microphone color="#ffffff" />
          </S.ActionButton>
        )}
      </S.InputContainer>
    </S.Container>
  );
};