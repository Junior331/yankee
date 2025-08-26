import { useState, useRef } from 'react';
import { Audio } from 'expo-av';

export const useAudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

  const startRecording = async () => {
    console.log('Audio recording not implemented in this hook');
    return Promise.resolve();
  };

  const stopRecording = async () => {
    console.log('Audio recording not implemented in this hook');
    return null;
  };

  const playSound = async (uri: string) => {
    try {
      console.log('🔊 Playing audio:', uri);
      
      // Parar qualquer som anterior
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
      }

      // Carregar e tocar novo som
      const { sound } = await Audio.Sound.createAsync({ uri });
      soundRef.current = sound;
      setIsPlaying(true);

      // Configurar callback para quando terminar
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlaying(false);
        }
      });

      await sound.playAsync();
      console.log('✅ Audio playing started');
      
    } catch (error) {
      console.error('❌ Error playing sound:', error);
      setIsPlaying(false);
      throw error;
    }
  };

  const pauseSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error pausing sound:', error);
    }
  };

  const resumeSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error resuming sound:', error);
    }
  };

  const stopSound = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
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
    playbackPosition: 0,
    playbackDuration: 0,
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