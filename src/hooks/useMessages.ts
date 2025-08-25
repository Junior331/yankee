import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export interface Message {
  id: string;
  text: string;
  isSender: boolean;
  timestamp: string;
  type: 'text' | 'audio' | 'image';
  audioUrl?: string;
  audioUri?: string;
  audioStatus?: 'idle' | 'playing' | 'paused' | 'loading';
  audioDuration?: number;
  imageUrl?: string;
  imageUri?: string;
}

export const useMessages = (chatId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMessages = useCallback(async () => {
    try {
      setIsLoading(true);
      const storedMessages = await AsyncStorage.getItem(`chat_${chatId}`);
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      } else {
        // Mensagens iniciais mockadas
        const initialMessages: Message[] = [
          {
            id: uuid.v4() as string,
            text: "Dude, guess what just happened",
            isSender: false,
            timestamp: "10:20 AM",
            type: "text",
          },
          {
            id: uuid.v4() as string,
            text: "Spill ",
            isSender: true,
            timestamp: "10:20 AM",
            type: "text",
          },
          {
            id: uuid.v4() as string,
            text: "I was walking to class and totally tripped over my own shoelace… in front of everyone.",
            isSender: false,
            timestamp: "10:20 AM",
            type: "text",
          },
          {
            id: uuid.v4() as string,
            text: "LMAO noooo are u ok tho??",
            isSender: true,
            timestamp: "10:20 AM",
            type: "text",
          },
        ];
        setMessages(initialMessages);
        await AsyncStorage.setItem(`chat_${chatId}`, JSON.stringify(initialMessages));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setIsLoading(false);
    }
  }, [chatId]);

  const saveMessages = useCallback(async (newMessages: Message[]) => {
    try {
      await AsyncStorage.setItem(`chat_${chatId}`, JSON.stringify(newMessages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  }, [chatId]);

  const sendMessage = useCallback(async (messageData: Partial<Message>) => {
    const newMessage: Message = {
      id: uuid.v4() as string,
      text: messageData.text || '',
      isSender: true,
      timestamp: new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit' 
      }),
      type: messageData.type || 'text',
      audioUrl: messageData.audioUrl,
      audioUri: messageData.audioUri,
      audioStatus: 'idle',
      audioDuration: messageData.audioDuration,
      imageUrl: messageData.imageUrl,
      imageUri: messageData.imageUri,
    };

    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    await saveMessages(updatedMessages);

    // Simular resposta automática após 1-3 segundos
    setTimeout(() => {
      const autoReply: Message = {
        id: uuid.v4() as string,
        text: getRandomReply(),
        isSender: false,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit' 
        }),
        type: 'text',
      };
      
      const withReply = [...updatedMessages, autoReply];
      setMessages(withReply);
      saveMessages(withReply);
    }, Math.random() * 2000 + 1000);

    return newMessage;
  }, [messages, saveMessages]);

  const updateMessage = useCallback(async (messageId: string, updates: Partial<Message>) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, ...updates } : msg
    );
    setMessages(updatedMessages);
    await saveMessages(updatedMessages);
  }, [messages, saveMessages]);

  return {
    messages,
    isLoading,
    loadMessages,
    sendMessage,
    updateMessage,
  };
};

const replies = [
  "That's interesting!",
  "Really? Tell me more",
  "Haha, that's funny!",
  "I can't believe it!",
  "What happened next?",
  "That's crazy!",
  "I know right?",
  "Same here!",
  "No way!",
  "That's awesome!",
];

const getRandomReply = () => {
  return replies[Math.floor(Math.random() * replies.length)];
};