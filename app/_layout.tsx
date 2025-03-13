import { Stack } from "expo-router";
import { SafeAreaView, StatusBar, Platform, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "JetBrainsMono-Regular": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });
  if (!fontsLoaded) {
      return <ActivityIndicator size="large" />;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "lightblue",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "lightblue" }, 
          headerTintColor: "white",
          headerBackTitle: "Back"
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen 
          name="login" 
          options={{ title: "Login" }} />
        <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      </Stack>
    </SafeAreaView>
  );
}