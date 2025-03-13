import { Stack } from "expo-router";
import { SafeAreaView, StatusBar, Platform } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#82B3FE",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#82B3FE" }, 
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
