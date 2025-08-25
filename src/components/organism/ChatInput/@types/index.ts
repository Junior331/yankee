export interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSendText: () => void;
  onSendImage: (imageUri: string) => void;
  onSendAudio: (audioUri: string, duration: number) => void;
  disabled?: boolean;
}