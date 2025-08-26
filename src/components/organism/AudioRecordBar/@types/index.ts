export interface AudioRecordBarProps {
  onSendAudio: (uri: string, durationMs: number) => void;
  onCancel: () => void;
}

export type RecordingState = 'idle' | 'recording' | 'paused';

export interface RecordingResult {
  uri: string;
  duration: number;
}