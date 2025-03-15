import { View, Text, Pressable, Linking, StyleSheet } from "react-native";
import React, { useMemo }, { useEffect } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import Calendar from "@/components/Calendar";
import { useRouter } from "expo-router";
import { useDarkMode } from "@/contexts/darkModeContext";import { getDailyQuestion } from '@/api/leetcode';
import { useColors } from '@/styles/colors';

type Difficulty = "Easy" | "Medium" | "Hard";

export default function home() {
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [question, setQuestion] = 
    React.useState<{
      name: string;
      link: string;
      number: number;
      difficulty: Difficulty;
    }>({
      name: "",
      link: "",
      number: 0,
      difficulty: "Easy", 
    });


  useEffect(() => {
    const fetchDailyQuestion = async () => {
      try {
        const data = await getDailyQuestion();
        if (data) {
          setQuestion({
            name: data.questionTitle,
            link: data.questionLink,
            number: data.questionFrontendId,
            difficulty: data.difficulty
          });
        }
      } catch (error) {
        console.error("Failed to get daily question:", error);
      }
      finally {
        setLoading(false);
      }
    };
  
    fetchDailyQuestion();
  }, []);

  const openDailyQuestion = async () => {
    Linking.openURL(question.link);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      {loading 
        ? 
        <Text>Loading...</Text> 
        : 
        <View style={globalStyles.module}>
          <Text style={globalStyles.moduleTitle}>Daily Question</Text>
          <Text style={globalStyles.moduleText}>{question.number}. {question.name}</Text>
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