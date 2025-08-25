import React, { useState } from "react";
import { Alert, Haptics } from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";
import { ChatInputProps } from "./@types";
import { PaperClip, Camera, Microphone, MoodSmile } from "@/assets/icons";
import { CommentSendIcon } from "@/assets/icons";
import { useAudioRecorder } from "@/hooks/useAudioRecorder";

export const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChangeText,
  onSendText,
  onSendImage,
  onSendAudio,
  disabled = false,
}) => {
  const [showAttachments, setShowAttachments] = useState(false);
  const {
    isRecording,
    recordingDuration,
    startRecording,
    stopRecording,
    formatDuration,
  } = useAudioRecorder();

  const handleSendText = () => {
    if (value.trim()) {
      onSendText();
      setShowAttachments(false);
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
      setShowAttachments(false);
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
      setShowAttachments(false);
    }
  };

  const handleStartRecording = async () => {
    try {
      await startRecording();
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
      Alert.alert('Error', 'Could not start recording');
    }
  };

  const handleStopRecording = async () => {
    try {
      const recordingResult = await stopRecording();
      if (recordingResult) {
        onSendAudio(recordingResult.uri, recordingResult.duration);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not stop recording');
    }
  };

  if (isRecording) {
    return (
      <S.Container>
        <S.RecordingContainer>
          <S.RecordingDot />
          <S.RecordingText>Recording...</S.RecordingText>
          <S.RecordingDuration>
            {formatDuration(recordingDuration)}
          </S.RecordingDuration>
          <S.StopRecordingButton onPress={handleStopRecording}>
            <CommentSendIcon color="#ffffff" />
          </S.StopRecordingButton>
        </S.RecordingContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      {showAttachments && (
        <S.InputContainer style={{ marginBottom: 10 }}>
          <S.AttachmentButton onPress={handleImagePicker}>
            <PaperClip color="#ffffff" />
          </S.AttachmentButton>
          <S.AttachmentButton onPress={handleCameraCapture}>
            <Camera color="#ffffff" />
          </S.AttachmentButton>
          <S.AttachmentButton onPress={() => setShowAttachments(false)}>
            <MoodSmile color="#ffffff" />
          </S.AttachmentButton>
        </S.InputContainer>
      )}
      
      <S.InputContainer>
        <S.AttachmentButton onPress={() => setShowAttachments(!showAttachments)}>
          <PaperClip color="#ffffff" />
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