import { getGlobalStyles } from "@/styles/globalStyles";
import React, { useMemo, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useColors } from "@/styles/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isDarkMode } = useDarkMode();
  const colors = useColors();

  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Regular": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });
  const globalStyles = useMemo(() => {
    return getGlobalStyles(isDarkMode, colors);
  }, [isDarkMode]);
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <SafeAreaView
      style={[
        globalStyles.safeView,
        {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <Stack screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  );
}
