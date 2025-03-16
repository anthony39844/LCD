import { View, Text, Pressable, Linking, StyleSheet } from "react-native";
import React, { useMemo, useEffect } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import Calendar from "@/components/Calendar";
import { useRouter } from "expo-router";
import { useColors } from "@/styles/colors";
import { useDarkMode } from "@/contexts/darkModeContext";
import { fetchDailyQuestion } from '@/api/routes';

type Difficulty = "Easy" | "Medium" | "Hard";

export default function home() {
  const colors = useColors();
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode, colors), [isDarkMode]);
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [question, setQuestion] = 
    React.useState<{
      name: string;
      link: string;
      date: string;
      difficulty: Difficulty;
    }>({
      name: "",
      link: "",
      date: "",
      difficulty: "Easy", 
    });


  useEffect(() => {
    const fetchDailyLeeCodeQuestion = async () => {
      try {
        const data = await fetchDailyQuestion();
        if (data) {
          let question = data.activeDailyCodingChallengeQuestion
          setQuestion({
            name: question.question.title,
            link: "https://leetcode.com" + question.link,
            date: question.date,
            difficulty: question.question.difficulty
          });
        }
      } catch (error) {   
        console.error("Failed to get daily question:", error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchDailyLeeCodeQuestion();
  }, []);

  const openDailyQuestion = async () => {
    Linking.openURL(question.link);
  };

  function formatDate(date: string) {
    const dateObj = new Date(date); 
    return dateObj.toLocaleDateString();
  }


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      {loading 
        ? 
        <Text>Loading...</Text> 
        : 
        <View style={globalStyles.module}>
          <Text style={globalStyles.moduleTitle}>Daily Question</Text>
          <Text style={globalStyles.moduleText}>{formatDate(question.date)}</Text>
          <Text style={globalStyles.moduleText}>{question.name}</Text>
          <Text style={[styles.difficulty, {
              color: colors.difficultyColors[question.difficulty], 
            }]}>{question.difficulty}</Text>
          <Pressable style={globalStyles.secondaryBtn} onPress={openDailyQuestion}>
              <Text style={globalStyles.buttonText}>Start Coding!</Text>
          </Pressable>
        </View>
      }
      <Pressable onPress={() => router.push("/streak")}>
        <View style={globalStyles.module}>
          <Text style={globalStyles.moduleText}>Streak: </Text>
          <Calendar full={false} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  difficulty: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: "#484848",
    fontSize: 14,
    fontFamily: "JetBrainsMono-Regular",
  }
});