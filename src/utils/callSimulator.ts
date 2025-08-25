import { router } from "expo-router";

export const simulateIncomingVoiceCall = (contactName: string, contactAvatar: string, contactUsername: string) => {
  setTimeout(() => {
    router.push({
      pathname: "/voice-call",
      params: {
        contactName,
        contactAvatar,
        contactUsername,
        isIncoming: "true"
      }
    });
  }, Math.random() * 30000 + 10000); // Entre 10 a 40 segundos
};

export const simulateIncomingVideoCall = (contactName: string, contactAvatar: string, contactUsername: string) => {
  setTimeout(() => {
    router.push({
      pathname: "/video-call",
      params: {
        contactName,
        contactAvatar,
        contactUsername,
        isIncoming: "true"
      }
    });
  }, Math.random() * 30000 + 10000); // Entre 10 a 40 segundos
};

export const CallSimulator = {
  voice: simulateIncomingVoiceCall,
  video: simulateIncomingVideoCall,
};