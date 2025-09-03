import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CallContextType {
  isCallActive: boolean;
  isCallMinimized: boolean;
  callData: {
    contactName: string;
    contactAvatar: string;
    callDuration: number;
    isConnected: boolean;
    isMuted: boolean;
    isSpeakerOn: boolean;
  } | null;
  startCall: (data: {
    contactName: string;
    contactAvatar: string;
  }) => void;
  endCall: () => void;
  minimizeCall: () => void;
  maximizeCall: () => void;
  updateCallDuration: (duration: number) => void;
  updateCallSettings: (settings: { isConnected?: boolean; isMuted?: boolean; isSpeakerOn?: boolean; }) => void;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export const CallProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isCallMinimized, setIsCallMinimized] = useState(false);
  const [callData, setCallData] = useState<CallContextType['callData']>(null);

  const startCall = (data: { contactName: string; contactAvatar: string }) => {
    setIsCallActive(true);
    setIsCallMinimized(false);
    setCallData({
      contactName: data.contactName,
      contactAvatar: data.contactAvatar,
      callDuration: 0,
      isConnected: false,
      isMuted: false,
      isSpeakerOn: false,
    });
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsCallMinimized(false);
    setCallData(null);
  };

  const minimizeCall = () => {
    setIsCallMinimized(true);
  };

  const maximizeCall = () => {
    setIsCallMinimized(false);
  };

  const updateCallDuration = (duration: number) => {
    if (callData) {
      setCallData({ ...callData, callDuration: duration });
    }
  };

  const updateCallSettings = (settings: { isConnected?: boolean; isMuted?: boolean; isSpeakerOn?: boolean; }) => {
    if (callData) {
      setCallData({ ...callData, ...settings });
    }
  };

  return (
    <CallContext.Provider value={{
      isCallActive,
      isCallMinimized,
      callData,
      startCall,
      endCall,
      minimizeCall,
      maximizeCall,
      updateCallDuration,
      updateCallSettings,
    }}>
      {children}
    </CallContext.Provider>
  );
};

export const useCallContext = () => {
  const context = useContext(CallContext);
  if (context === undefined) {
    throw new Error('useCallContext must be used within a CallProvider');
  }
  return context;
};