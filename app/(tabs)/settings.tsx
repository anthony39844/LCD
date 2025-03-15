import { View, Text, Pressable } from "react-native";
import React, { useMemo } from "react";
import { useRouter } from "expo-router";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useDarkMode } from "@/contexts/darkModeContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);
  const router = useRouter();
  const { toggleDarkMode } = useDarkMode();

  const themes = [
    { theme: "light", icon: "light-mode" },
    { theme: "dark", icon: "mode-night" },
    { theme: "device", icon: "smartphone" },
  ];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings</Text>
      <Pressable
        style={globalStyles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={globalStyles.buttonText}>Log Out</Text>
      </Pressable>
      <View style={globalStyles.buttonContainer}>
        {themes.map((theme) => (
          <Pressable
            style={globalStyles.button}
            key={theme.theme}
            onPress={() => {
              toggleDarkMode(theme.theme);
            }}
          >
            <MaterialIcons
              name={theme.icon as keyof typeof MaterialIcons.glyphMap}
              size={30}
              color={isDarkMode ? "white" : "black"}
            />
            <Text style={globalStyles.buttonText}>{theme.theme}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
