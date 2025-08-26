import { Message } from "@/hooks/useMessages";

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: string;
  bio?: string;
}

export interface ChatConversation {
  id: string;
  user: User;
  lastMessage: Message;
  unreadCount: number;
  updatedAt: string;
  type: 'accepted' | 'request';
  messages: Message[];
}

// Base de usuários simulados
export const users: User[] = [
  {
    id: 'user_1',
    name: 'Sarah Chen',
    username: '@sarah_chen',
    avatar: 'https://i.pravatar.cc/400?img=1',
    isOnline: true,
    bio: 'Designer & coffee lover ☕️',
  },
  {
    id: 'user_2',
    name: 'Marcus Johnson',
    username: '@marcus_j',
    avatar: 'https://i.pravatar.cc/400?img=2',
    isOnline: false,
    lastSeen: '2 hours ago',
    bio: 'Photographer 📸 | Travel enthusiast',
  },
  {
    id: 'user_3',
    name: 'Elena Rodriguez',
    username: '@elena.r',
    avatar: 'https://i.pravatar.cc/400?img=3',
    isOnline: true,
    bio: 'Frontend Developer 👩‍💻',
  },
  {
    id: 'user_4',
    name: 'James Wilson',
    username: '@james_wilson',
    avatar: 'https://i.pravatar.cc/400?img=4',
    isOnline: false,
    lastSeen: '1 day ago',
    bio: 'Music producer 🎵',
  },
  {
    id: 'user_5',
    name: 'Aisha Patel',
    username: '@aisha.patel',
    avatar: 'https://i.pravatar.cc/400?img=5',
    isOnline: true,
    bio: 'Yoga instructor 🧘‍♀️ | Mindfulness coach',
  },
  {
    id: 'user_6',
    name: 'Ryan Brooks',
    username: '@ryan_brooks',
    avatar: 'https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__',
    isOnline: true,
    bio: 'Tech enthusiast | Gamer 🎮',
  },
  {
    id: 'user_7',
    name: 'Sophie Martin',
    username: '@sophie_martin',
    avatar: 'https://i.pravatar.cc/400?img=6',
    isOnline: false,
    lastSeen: '30 minutes ago',
    bio: 'Chef 👩‍🍳 | Food blogger',
  },
  {
    id: 'user_8',
    name: 'David Kim',
    username: '@david.kim',
    avatar: 'https://i.pravatar.cc/400?img=7',
    isOnline: true,
    bio: 'Fitness trainer 💪 | Marathon runner',
  },
];

// Conversas da aba principal (aceitas)
export const mainConversations: ChatConversation[] = [
  {
    id: 'conv_1',
    user: users[0], // Sarah Chen
    lastMessage: {
      id: 'msg_1',
      text: "Hey! Are we still on for coffee later? ☕️",
      isSender: false,
      timestamp: "2:30 PM",
      type: 'text',
    },
    unreadCount: 2,
    updatedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 min ago
    type: 'accepted',
    messages: [
      {
        id: 'msg_1a',
        text: "Good morning! How was your weekend?",
        isSender: false,
        timestamp: "10:20 AM",
        type: 'text',
      },
      {
        id: 'msg_1b',
        text: "It was great! Went hiking in the mountains 🏔️",
        isSender: true,
        timestamp: "10:25 AM",
        type: 'text',
      },
      {
        id: 'msg_1c',
        text: "",
        isSender: false,
        timestamp: "10:30 AM",
        type: 'audio',
        audioUri: 'audio_sample_1',
        audioDuration: 5,
      },
      {
        id: 'msg_1d',
        text: "Sounds amazing! I love hiking too",
        isSender: true,
        timestamp: "10:35 AM",
        type: 'text',
      },
      {
        id: 'msg_1',
        text: "Hey! Are we still on for coffee later? ☕️",
        isSender: false,
        timestamp: "2:30 PM",
        type: 'text',
      },
    ]
  },
  {
    id: 'conv_2',
    user: users[5], // Ryan Brooks
    lastMessage: {
      id: 'msg_2',
      text: "",
      isSender: true,
      timestamp: "1:45 PM",
      type: 'audio',
      audioUri: 'audio_sample_2',
      audioDuration: 8,
    },
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 min ago
    type: 'accepted',
    messages: [
      {
        id: 'msg_2a',
        text: "Dude, guess what just happened",
        isSender: false,
        timestamp: "1:20 PM",
        type: 'text',
      },
      {
        id: 'msg_2b',
        text: "Spill! 😄",
        isSender: true,
        timestamp: "1:22 PM",
        type: 'text',
      },
      {
        id: 'msg_2c',
        text: "I was walking to class and totally tripped over my own shoelace... in front of everyone 🤦‍♂️",
        isSender: false,
        timestamp: "1:25 PM",
        type: 'text',
      },
      {
        id: 'msg_2d',
        text: "LMAO nooo! Are you ok though??",
        isSender: true,
        timestamp: "1:27 PM",
        type: 'text',
      },
      {
        id: 'msg_2',
        text: "",
        isSender: true,
        timestamp: "1:45 PM",
        type: 'audio',
        audioUri: 'audio_sample_2',
        audioDuration: 8,
      },
    ]
  },
  {
    id: 'conv_3',
    user: users[2], // Elena Rodriguez
    lastMessage: {
      id: 'msg_3',
      text: "Check out this new component I built! 🚀",
      isSender: false,
      timestamp: "12:15 PM",
      type: 'text',
    },
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    type: 'accepted',
    messages: [
      {
        id: 'msg_3a',
        text: "Working on the new project today",
        isSender: false,
        timestamp: "11:30 AM",
        type: 'text',
      },
      {
        id: 'msg_3b',
        text: "Nice! How's it going?",
        isSender: true,
        timestamp: "11:45 AM",
        type: 'text',
      },
      {
        id: 'msg_3',
        text: "Check out this new component I built! 🚀",
        isSender: false,
        timestamp: "12:15 PM",
        type: 'text',
      },
    ]
  },
  {
    id: 'conv_4',
    user: users[4], // Aisha Patel
    lastMessage: {
      id: 'msg_4',
      text: "Yoga class was amazing today! 🧘‍♀️ You should join next time",
      isSender: false,
      timestamp: "Yesterday",
      type: 'text',
    },
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    type: 'accepted',
    messages: [
      {
        id: 'msg_4a',
        text: "Morning meditation session starts in 10 minutes",
        isSender: false,
        timestamp: "8:50 AM",
        type: 'text',
      },
      {
        id: 'msg_4b',
        text: "I wish I could join but I'm at work 😞",
        isSender: true,
        timestamp: "8:52 AM",
        type: 'text',
      },
      {
        id: 'msg_4',
        text: "Yoga class was amazing today! 🧘‍♀️ You should join next time",
        isSender: false,
        timestamp: "Yesterday",
        type: 'text',
      },
    ]
  },
];

// Chat requests (pendentes)
export const chatRequests: ChatConversation[] = [
  {
    id: 'req_1',
    user: users[1], // Marcus Johnson
    lastMessage: {
      id: 'req_msg_1',
      text: "Hey! I saw your photography work on Instagram. Really impressive! 📸",
      isSender: false,
      timestamp: "3 hours ago",
      type: 'text',
    },
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    type: 'request',
    messages: [
      {
        id: 'req_msg_1',
        text: "Hey! I saw your photography work on Instagram. Really impressive! 📸",
        isSender: false,
        timestamp: "3 hours ago",
        type: 'text',
      },
    ]
  },
  {
    id: 'req_2',
    user: users[3], // James Wilson
    lastMessage: {
      id: 'req_msg_2',
      text: "Hi! I'm a music producer and would love to collaborate on a project 🎵",
      isSender: false,
      timestamp: "5 hours ago",
      type: 'text',
    },
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    type: 'request',
    messages: [
      {
        id: 'req_msg_2',
        text: "Hi! I'm a music producer and would love to collaborate on a project 🎵",
        isSender: false,
        timestamp: "5 hours ago",
        type: 'text',
      },
    ]
  },
  {
    id: 'req_3',
    user: users[6], // Sophie Martin
    lastMessage: {
      id: 'req_msg_3',
      text: "Love your food posts! Would you be interested in a recipe exchange? 👩‍🍳",
      isSender: false,
      timestamp: "1 day ago",
      type: 'text',
    },
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    type: 'request',
    messages: [
      {
        id: 'req_msg_3',
        text: "Love your food posts! Would you be interested in a recipe exchange? 👩‍🍳",
        isSender: false,
        timestamp: "1 day ago",
        type: 'text',
      },
    ]
  },
  {
    id: 'req_4',
    user: users[7], // David Kim
    lastMessage: {
      id: 'req_msg_4',
      text: "",
      isSender: false,
      timestamp: "2 days ago",
      type: 'audio',
      audioUri: 'audio_sample_request',
      audioDuration: 12,
    },
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    type: 'request',
    messages: [
      {
        id: 'req_msg_4',
        text: "",
        isSender: false,
        timestamp: "2 days ago",
        type: 'audio',
        audioUri: 'audio_sample_request',
        audioDuration: 12,
      },
    ]
  },
];

// Helper function para encontrar usuário por ID
export const getUserById = (userId: string): User | undefined => {
  return users.find(user => user.id === userId);
};

// Helper function para encontrar conversa por ID
export const getConversationById = (conversationId: string): ChatConversation | undefined => {
  const allConversations = [...mainConversations, ...chatRequests];
  return allConversations.find(conv => conv.id === conversationId);
};

// Helper function para formatar última vez online
export const formatLastSeen = (user: User): string => {
  if (user.isOnline) return 'Online';
  return user.lastSeen || 'Last seen recently';
};