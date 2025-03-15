import { View, Text, Image } from "react-native";
import React, { useEffect, useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { getUser, getSolved } from "@/api/leetcode";
import DonutChart from "@/components/donutChart";
import { useColors } from "@/styles/colors";
import { useDarkMode } from "@/contexts/darkModeContext";

export default function Profile() {
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);
  const colors = useColors();
  const [loading, setLoading] = React.useState(true);
  const [numSolved, setNumSolved] = React.useState({
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  });

  useEffect(() => {
    const fetchSolved = async () => {
      try {
        const data = await getSolved();
        if (data) {
          setNumSolved({
            total: data.acSubmissionNum[0].count,
            easy: data.acSubmissionNum[1].count,
            medium: data.acSubmissionNum[2].count,
            hard: data.acSubmissionNum[3].count,
          });
          return data.avatar;
        }
      } catch (error) {
        console.error("Failed to get daily question:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolved();
  }, []);

  // const fetchUser = async () => {
  //     try {
  //       const data = await getUser("anthony39844");
  //       if (data) {
  //         console.log(data)
  //         return data.avatar
  //       }
  //     } catch (error) {
  //       console.error("Failed to get daily question:", error);
  //     }
  // };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={globalStyles.module}>
          <DonutChart
            data={[
              { value: numSolved.easy, color: colors.difficultyColors.Easy },
              {
                value: numSolved.medium,
                color: colors.difficultyColors.Medium,
              },
              { value: numSolved.hard, color: colors.difficultyColors.Hard },
            ]}
            total={numSolved.total}
          />
          <Text>Easy: {numSolved.easy}</Text>
          <Text>Medium: {numSolved.medium}</Text>
          <Text>Hard: {numSolved.hard}</Text>
        </View>
      )}
      <View style={globalStyles.module}>
        <Text>Streak: </Text>
      </View>
    </View>
  );
}
