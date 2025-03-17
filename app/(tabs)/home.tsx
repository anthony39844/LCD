import { View, Text, Pressable, Linking } from "react-native";
import React, { useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import Calendar from "@/components/Calendar";
import { useRouter } from "expo-router";
import { useColors } from "@/styles/colors";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useApiContext } from "@/contexts/apiContext";

export default function home() {
  const colors = useColors();
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode, colors), [isDarkMode]);
  const router = useRouter();
  const { fetchData, question, loading } = useApiContext();

  React.useEffect(() => {
    fetchData();
  }, []);

  const openDailyQuestion = async () => {
    Linking.openURL(question.link);
  };

  function formatDate(date: string) {
    const dateObj = new Date(date); 
    return dateObj.toLocaleDateString();
  }

  if (loading) {
    return (
      <View style={globalStyles.loading}>
        <Text style={globalStyles.loadingText}>Loading...</Text>
      </View>
    );
  }


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
        <View style={globalStyles.module}>
          <Text style={globalStyles.moduleTitle}>Daily Question</Text>
          <Text style={globalStyles.moduleText}>{formatDate(question.date)}</Text>
          <Text style={globalStyles.moduleText}>{question.id}. {question.name}</Text>
          <Text style={[globalStyles.difficultyText, {
              color: colors.difficultyColors[question.difficulty], 
            }]}>{question.difficulty}</Text>
          <Pressable style={globalStyles.secondaryBtn} onPress={openDailyQuestion}>
              <Text style={globalStyles.buttonText}>Start Coding!</Text>
          </Pressable>
        </View>
      <Pressable onPress={() => router.push("/streak")}>
        <View style={globalStyles.module}>
          <Text style={globalStyles.moduleText}>Streak: </Text>
          <Calendar full={false} />
        </View>
      </Pressable>
    </View>
  );
}
