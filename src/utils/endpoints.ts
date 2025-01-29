const baseUrl = process.env.EXPO_PUBLIC_FIREBASE_API_KEY || "";

export const ENDPOINTS = {
  USER: {
    SIGN: {
      IN: baseUrl,
      UP: baseUrl,
    },
  },
};
