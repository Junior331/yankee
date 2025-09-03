import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useCallContext } from '@/contexts/CallContext';
import { Microphone, MicrophoneOff, PhoneCall } from '@/assets/icons';
import * as S from './styles';

export const CallOverlay: React.FC = () => {
  const router = useRouter();
  const { 
    isCallActive, 
    isCallMinimized, 
    callData, 
    endCall, 
    maximizeCall, 
    updateCallSettings 
  } = useCallContext();

  if (!isCallActive || !isCallMinimized || !callData) {
    return null;
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleMaximize = () => {
    maximizeCall();
    router.push({
      pathname: '/voice-call',
      params: {
        contactName: callData.contactName,
        contactAvatar: callData.contactAvatar,
        isIncoming: 'false',
      },
    });
  };

  const handleMute = () => {
    updateCallSettings({ isMuted: !callData.isMuted });
  };

  const handleEndCall = () => {
    endCall();
  };

  return (
    <S.MinimizedContainer onPress={handleMaximize}>
      <S.MinimizedAvatar>
        <Image 
          source={{ uri: callData.contactAvatar }} 
          style={{ width: '100%', height: '100%' }} 
          resizeMode="cover" 
        />
      </S.MinimizedAvatar>
      <S.MinimizedContactName numberOfLines={1}>
        {callData.contactName}
      </S.MinimizedContactName>
      <S.MinimizedDuration>
        {callData.isConnected ? formatDuration(callData.callDuration) : 'Calling...'}
      </S.MinimizedDuration>
      <S.MinimizedActions>
        <S.MinimizedActionButton variant="secondary" onPress={handleMute}>
          {callData.isMuted ? 
            <Microphone width={16} height={16} /> : 
            <MicrophoneOff width={16} height={16} />
          }
        </S.MinimizedActionButton>
        <S.MinimizedActionButton variant="danger" onPress={handleEndCall}>
          <PhoneCall color="#ffffff" width={16} height={16} />
        </S.MinimizedActionButton>
      </S.MinimizedActions>
    </S.MinimizedContainer>
  );
};