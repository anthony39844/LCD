import { Stack } from "expo-router";
import { SafeAreaView, StatusBar, Platform, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import {getGlobalStyles} from "@/styles/globalStyles";

export default function Layout() {
  const globalStyles = getGlobalStyles();
  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Regular": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });
  if (!fontsLoaded) {
      return <ActivityIndicator size="large" />;
  }
  return (
    <SafeAreaView
      style={{
        ...globalStyles.safeView,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="login" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="signup" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="home" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="streak" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="profile" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="settings" options={{ headerShown: false, animation: "none" }} />
      </Stack>
    </SafeAreaView>
  );
}