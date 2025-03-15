import { View, Text, Pressable } from "react-native";
import React, { useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useDarkMode } from "@/contexts/darkModeContext";

export default function Profile() {
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      <View style={globalStyles.module}>
        <Text style={globalStyles.moduleText}>Daily Question</Text>
      </View>
      <View style={globalStyles.module}>
        <Text>Streak: </Text>
      </View>
    </View>
  );
}
