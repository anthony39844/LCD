import { View, Text } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import DonutChart from '@/components/donutChart';
import { useColors } from '@/styles/colors';
import { useDarkMode } from '@/contexts/darkModeContext';
import { fetchSolvedProblems } from '@/api/routes';

export default function Profile() {
  const colors = useColors();
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode, colors), [isDarkMode]);
  const [loading, setLoading] = React.useState(true);
  const [numSolved, setNumSolved] = React.useState({
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0
  });

  useEffect(() => {

    const fetchSolved = async () => {
      try {
        const data = await fetchSolvedProblems("anthony39844");
        if (data) {
          const counts = data.matchedUser.submitStatsGlobal.acSubmissionNum
          setNumSolved({
            total: counts[0].count,
            easy: counts[1].count,
            medium: counts[2].count,
            hard: counts[3].count
          });
        }
      } catch (error) {
        console.error("Failed to get daily question:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSolved();
  }, []);

  return (
      <View style={globalStyles.container}>
          <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
          {loading 
            ? 
            <Text>Loading...</Text> 
            : 
            <View style={globalStyles.module}>
              <DonutChart 
                data={[
                  {value: numSolved.easy, color: colors.difficultyColors.Easy},
                  {value: numSolved.medium, color: colors.difficultyColors.Medium},
                  {value: numSolved.hard, color: colors.difficultyColors.Hard}
                ]}
                total={numSolved.total}
              /> 
              <Text>Easy: {numSolved.easy}</Text>
              <Text>Medium: {numSolved.medium}</Text>
              <Text>Hard: {numSolved.hard}</Text>
            </View>
    }
          <View style={globalStyles.module}>
              <Text>Streak: </Text>
          </View>
      </View>
  )
}