import { useState, useRef } from 'react';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [playbackDuration, setPlaybackDuration] = useState(0);
  
  const recording = useRef<Audio.Recording | null>(null);
  const sound = useRef<Audio.Sound | null>(null);
  const recordingTimer = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        throw new Error('Permission to access microphone is required!');
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording: newRecording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      
      recording.current = newRecording;
      setIsRecording(true);
      setRecordingDuration(0);

      // Timer para duração da gravação
      recordingTimer.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);

    } catch (error) {
      console.error('Failed to start recording:', error);
      throw error;
    }
  };

  const stopRecording = async () => {
    if (!recording.current) return null;

    try {
      setIsRecording(false);
      if (recordingTimer.current) {
        clearInterval(recordingTimer.current);
        recordingTimer.current = null;
      }

      await recording.current.stopAndUnloadAsync();
      const uri = recording.current.getURI();
      recording.current = null;

      if (uri) {
        const fileInfo = await FileSystem.getInfoAsync(uri);
        return {
          uri,
          duration: recordingDuration,
          size: fileInfo.exists ? fileInfo.size : 0,
        };
      }

      return null;
    } catch (error) {
      console.error('Failed to stop recording:', error);
      throw error;
    }
  };

  const playSound = async (uri: string) => {
    try {
      if (sound.current) {
        await sound.current.unloadAsync();
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true },
        (status) => {
          if (status.isLoaded) {
            setPlaybackPosition(status.positionMillis || 0);
            setPlaybackDuration(status.durationMillis || 0);
            
            if (status.didJustFinish) {
              setIsPlaying(false);
              setPlaybackPosition(0);
            }
          }
        }
      );

      sound.current = newSound;
      setIsPlaying(true);
    } catch (error) {
      console.error('Failed to play sound:', error);
      throw error;
    }
  };

  const pauseSound = async () => {
    if (sound.current) {
      await sound.current.pauseAsync();
      setIsPlaying(false);
    }
  };

  const resumeSound = async () => {
    if (sound.current) {
      await sound.current.playAsync();
      setIsPlaying(true);
    }
  };

  const stopSound = async () => {
    if (sound.current) {
      await sound.current.stopAsync();
      setIsPlaying(false);
      setPlaybackPosition(0);
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
    playbackPosition,
    playbackDuration,
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