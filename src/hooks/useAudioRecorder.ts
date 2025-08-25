import { useState, useRef } from 'react';
import { useAudioRecorder as useExpoAudioRecorder, useAudioPlayer } from 'expo-audio';
import * as FileSystem from 'expo-file-system';

export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const recordingTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  let audioRecorder: any = null;
  try {
    audioRecorder = useExpoAudioRecorder({
      extension: '.m4a',
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 96000,
      android: {
        extension: '.m4a',
        outputFormat: 'MPEG_4',
        audioEncoder: 'AAC'
      },
      ios: {
        extension: '.m4a',
        outputFormat: 'm4a',
        audioQuality: 'MEDIUM'
      },
      web: {
        mimeType: 'audio/mp4',
        bitsPerSecond: 96000
      }
    });
  } catch (error) {
    console.warn('Audio recorder initialization failed:', error);
  }
  let audioPlayer: any = null;
  try {
    audioPlayer = useAudioPlayer();
  } catch (error) {
    console.warn('Audio player initialization failed:', error);
  }

  const startRecording = async () => {
    if (!audioRecorder) {
      console.warn('Audio recorder not available');
      return;
    }
    
    try {
      // Request permissions is handled by expo-audio internally
      await audioRecorder.record();
      
      setIsRecording(true);
      setRecordingDuration(0);

      // Timer para duração da gravação
      recordingTimer.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Failed to start recording:', error);
      // Don't throw error, just log it
    }
  };

  const stopRecording = async () => {
    if (!audioRecorder?.stop) return null;

    try {
      setIsRecording(false);
      if (recordingTimer.current) {
        clearInterval(recordingTimer.current);
        recordingTimer.current = null;
      }

      const uri = await audioRecorder.stop();

      if (uri) {
        try {
          const fileInfo = await FileSystem.getInfoAsync(uri);
          return {
            uri,
            duration: recordingDuration,
            size: fileInfo.exists ? fileInfo.size || 0 : 0,
          };
        } catch (error) {
          console.warn('Could not get file info:', error);
          return {
            uri,
            duration: recordingDuration,
            size: 0,
          };
        }
      }

      return null;
    } catch (error) {
      console.error('Failed to stop recording:', error);
      throw error;
    }
  };

  const playSound = async (uri: string) => {
    if (!audioPlayer) {
      console.warn('Audio player not available');
      return;
    }
    
    try {
      audioPlayer.replace(uri);
      audioPlayer.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to play sound:', error);
      // Don't throw error, just log it
    }
  };

  const pauseSound = async () => {
    try {
      audioPlayer.pause();
      setIsPlaying(false);
    } catch (error) {
      console.error('Failed to pause sound:', error);
      throw error;
    }
  };

  const resumeSound = async () => {
    try {
      audioPlayer.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to resume sound:', error);
      throw error;
    }
  };

  const stopSound = async () => {
    if (!audioPlayer) {
      console.warn('Audio player not available');
      return;
    }
    
    try {
      audioPlayer.pause();
      audioPlayer.seekTo(0);
      setIsPlaying(false);
    } catch (error) {
      console.error('Failed to stop sound:', error);
      // Don't throw error, just log it
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatMillis = (millis: number) => {
    const seconds = Math.floor(millis / 1000);
    return formatDuration(seconds);
  };

  return {
    isRecording,
    recordingDuration,
    isPlaying,
    playbackPosition: 0, // expo-audio handles this internally
    playbackDuration: 0, // expo-audio handles this internally
    startRecording,
    stopRecording,
    playSound,
    pauseSound,
    resumeSound,
    stopSound,
    formatDuration,
    formatMillis,
  };
};