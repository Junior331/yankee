import { Message } from "@/hooks/useMessages";

export interface MessageBubbleProps extends Message {
  onAudioPlay?: (messageId: string) => void;
  onAudioPause?: (messageId: string) => void;
}