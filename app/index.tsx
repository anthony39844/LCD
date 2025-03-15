import React, { useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useDarkMode } from "@/contexts/darkModeContext";

export default function Index() {

  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);
  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      <View style={globalStyles.buttonContainer}>
        <Pressable
          style={globalStyles.button}
          onPress={() => router.push("/signup")}
        >
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable
          style={globalStyles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={globalStyles.buttonText}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
}
