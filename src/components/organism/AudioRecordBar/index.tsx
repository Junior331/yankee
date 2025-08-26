import React, { useState, useEffect, useRef } from 'react';
import { Alert, Animated } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styles';
import { AudioRecordBarProps, RecordingState } from './@types';

export const AudioRecordBar: React.FC<AudioRecordBarProps> = ({
  onSendAudio,
  onCancel,
}) => {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Animation refs for waveform (mais barras como na imagem)
  const waveAnimations = useRef(Array.from({ length: 25 }, () => new Animated.Value(8))).current;
  const animationLoop = useRef<NodeJS.Timeout | null>(null);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const startTime = useRef<number>(0);
  const pausedDuration = useRef<number>(0);

  // Initialize audio recording permissions and settings
  useEffect(() => {
    setupAudio();
    return () => {
      cleanup();
    };
  }, []);

  const setupAudio = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Please grant microphone permission to record audio messages.');
        onCancel();
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: false,
      });
    } catch (error) {
      console.error('Error setting up audio:', error);
      Alert.alert('Error', 'Failed to setup audio recording');
      onCancel();
    }
  };

  const startWaveAnimation = () => {
    const animate = () => {
      const animations = waveAnimations.map((anim, index) => {
        // Diferentes alturas para simular waveform realista
        const minHeight = 4;
        const maxHeight = 24;
        const targetHeight = minHeight + Math.random() * (maxHeight - minHeight);
        
        return Animated.sequence([
          Animated.timing(anim, {
            toValue: targetHeight,
            duration: 150 + Math.random() * 200,
            useNativeDriver: false,
          }),
          Animated.timing(anim, {
            toValue: minHeight + Math.random() * 8,
            duration: 150 + Math.random() * 200,
            useNativeDriver: false,
          }),
        ]);
      });

      Animated.stagger(20, animations).start();
    };

    animate();
    animationLoop.current = setInterval(animate, 400);
  };

  const stopWaveAnimation = () => {
    if (animationLoop.current) {
      clearInterval(animationLoop.current);
      animationLoop.current = null;
    }
    
    // Reset all bars to default height
    waveAnimations.forEach(anim => {
      Animated.timing(anim, {
        toValue: 4,
        duration: 200,
        useNativeDriver: false,
      }).start();
    });
  };

  const startTimer = () => {
    startTime.current = Date.now() - pausedDuration.current;
    timerInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const seconds = Math.floor(elapsed / 1000);
      setDuration(seconds);
      console.log('Timer:', seconds); // Debug temporário
    }, 1000);
  };

  const stopTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const pauseTimer = () => {
    stopTimer();
    pausedDuration.current = Date.now() - startTime.current;
  };

  const resumeTimer = () => {
    startTimer();
  };

  const startRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
      }

      // Usar configuração mais simples e compatível
      const { recording: newRecording } = await Audio.Recording.createAsync({
        ...Audio.RecordingOptionsPresets.HIGH_QUALITY,
        android: {
          extension: '.m4a',
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
          sampleRate: 44100,
          numberOfChannels: 1,
          bitRate: 128000,
        },
        ios: {
          extension: '.m4a',
          outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
          sampleRate: 44100,
          numberOfChannels: 1,
          bitRate: 128000,
        },
      });

      setRecording(newRecording);
      setRecordingState('recording');
      setIsPaused(false);
      setDuration(0);
      pausedDuration.current = 0;
      
      // Garantir que o timer comece imediatamente
      startTime.current = Date.now();
      startTimer();
      startWaveAnimation();

    } catch (error) {
      console.error('Failed to start recording:', error);
      Alert.alert('Error', 'Failed to start recording');
    }
  };

  const pauseRecording = async () => {
    if (recording && recordingState === 'recording') {
      try {
        await recording.pauseAsync();
        setRecordingState('paused');
        setIsPaused(true);
        pauseTimer();
        stopWaveAnimation();
      } catch (error) {
        console.error('Failed to pause recording:', error);
      }
    }
  };

  const resumeRecording = async () => {
    if (recording && recordingState === 'paused') {
      try {
        await recording.startAsync();
        setRecordingState('recording');
        setIsPaused(false);
        resumeTimer();
        startWaveAnimation();
      } catch (error) {
        console.error('Failed to resume recording:', error);
      }
    }
  };

  const stopRecording = async () => {
    if (!recording) return null;

    try {
      // Primeiro, pegar o status ANTES de fazer stop
      const status = await recording.getStatusAsync();
      
      // Depois parar e fazer unload
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      
      stopTimer();
      stopWaveAnimation();
      
      console.log('Recording URI:', uri);
      console.log('Recording status:', status);
      
      if (uri) {
        // Usar a duração do status ou nosso timer interno
        const durationMs = (status.isLoaded && status.durationMillis) 
          ? status.durationMillis 
          : duration * 1000;
          
        console.log('Final recording duration:', durationMs);
        return { uri, duration: durationMs };
      }
      
      return null;
    } catch (error) {
      console.error('Failed to stop recording:', error);
      return null;
    } finally {
      setRecording(null);
      setRecordingState('idle');
    }
  };

  const handleMicPress = async () => {
    if (recordingState === 'idle') {
      await startRecording();
    } else if (recordingState === 'paused') {
      await resumeRecording();
    }
  };

  const handlePausePress = async () => {
    if (recordingState === 'recording') {
      await pauseRecording();
    }
  };

  const handleSendPress = async () => {
    console.log('Send pressed - Duration:', duration); // Debug temporário
    
    // Verificar o timer interno (em segundos) em vez da duração do arquivo
    if (duration < 1) {
      Alert.alert('Recording too short', 'Please record at least 1 second of audio');
      return;
    }

    const result = await stopRecording();
    console.log('Recording result:', result); // Debug temporário
    
    if (result) {
      // Usar a duração real do arquivo ou nosso timer (o que for maior)
      const finalDuration = Math.max(result.duration, duration * 1000);
      console.log('Final duration:', finalDuration); // Debug temporário
      onSendAudio(result.uri, finalDuration);
    } else {
      Alert.alert('Error', 'Failed to save recording');
      onCancel();
    }
  };

  const handleCancelPress = async () => {
    if (recording) {
      await stopRecording();
    }
    cleanup();
    onCancel();
  };

  const cleanup = () => {
    stopTimer();
    stopWaveAnimation();
    if (recording) {
      recording.stopAndUnloadAsync().catch(console.error);
    }
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Start recording immediately when component mounts
  useEffect(() => {
    startRecording();
  }, []);

  return (
    <S.Container>
      {/* Microphone Button */}
      <S.MicButton onPress={handleMicPress}>
        <Ionicons 
          name="mic" 
          size={24} 
          color="#ffffff" 
        />
      </S.MicButton>

      {/* Waveform Visualization */}
      <S.WaveformContainer>
        {waveAnimations.map((anim, index) => (
          <S.WaveBar
            key={index}
            isActive={recordingState === 'recording'}
            style={{ height: anim }}
          />
        ))}
      </S.WaveformContainer>

      {/* Timer Display - temporário para debug */}
      <S.TimerText>{formatDuration(duration)}</S.TimerText>

      {/* Pause/Resume Button */}
      {recordingState === 'recording' ? (
        <S.PauseButton onPress={handlePausePress}>
          <Ionicons name="pause" size={20} color="#ffffff" />
        </S.PauseButton>
      ) : (
        <S.PauseButton onPress={handleMicPress}>
          <Ionicons name="play" size={20} color="#ffffff" />
        </S.PauseButton>
      )}

      {/* Send Button */}
      <S.ActionButton 
        variant="send"
        onPress={handleSendPress}
        disabled={duration < 1}
      >
        <Ionicons 
          name="arrow-forward" 
          size={20} 
          color="white" 
        />
      </S.ActionButton>
    </S.Container>
  );
};