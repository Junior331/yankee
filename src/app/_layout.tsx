import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-reanimated";
import Provider from "@/state/provider";
import { NotificationsProvider } from "@/contexts/NotificationsContext";
import { CallProvider } from "@/contexts/CallContext";
import { CallOverlay } from "@/components/organism/CallOverlay";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(public)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "grey" }}>
        <NotificationsProvider>
          <CallProvider>
            <Provider>
              <ThemeProvider value={DefaultTheme}>
                <Stack>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen name="(public)" options={{ headerShown: false }} />
                  <Stack.Screen name="modal" options={{ presentation: "modal" }} />
                  <Stack.Screen name="chatuser" options={{ headerShown: false }} />
                  <Stack.Screen name="voice-call" options={{ headerShown: false }} />
                  <Stack.Screen name="video-call" options={{ headerShown: false }} />
                </Stack>
                <CallOverlay />
              </ThemeProvider>
            </Provider>
          </CallProvider>
        </NotificationsProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
