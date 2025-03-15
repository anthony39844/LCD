import { Stack } from "expo-router";
import { SafeAreaView, StatusBar, Platform, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import {getGlobalStyles} from "@/styles/globalStyles";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const globalStyles = getGlobalStyles();
  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Regular": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });

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
        {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}
      ]}
    >
      <Stack screenOptions={{headerShown: false, animation: "none"}}>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="index"/>
      </Stack>
    </SafeAreaView>
  );
}