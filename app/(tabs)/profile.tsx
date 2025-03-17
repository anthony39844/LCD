import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import DonutChart from '@/components/donutChart';
import { useColors } from '@/styles/colors';
import { useDarkMode } from '@/contexts/darkModeContext';
import { fetchSolvedProblems } from '@/api/routes';
import { fetchUser } from '@/api/routes';

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
  const [userIcon, setUserIcon] = React.useState('');

  useEffect(() => {

    const fetchData = async () => {
      try {
        const solvedData = await fetchSolvedProblems("anthony39844");
        const userData = await fetchUser("anthony39844");
        if (solvedData && userData) {
          const counts = solvedData.matchedUser.submitStatsGlobal.acSubmissionNum
          setNumSolved({
            total: counts[0].count,
            easy: counts[1].count,
            medium: counts[2].count,
            hard: counts[3].count
          });
          setUserIcon(userData.matchedUser.profile.userAvatar);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
      <View style={globalStyles.container}>
          <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
          {loading 
            ? 
            <Text>Loading...</Text> 
            : 
            <View style={globalStyles.module}>
              
              <Image source={{ uri: userIcon }} style={globalStyles.userImg}></Image>
              <Text style={globalStyles.moduleTitle}>Anthony39844</Text>
              <DonutChart 
                data={[
                  {value: numSolved.easy, color: colors.difficultyColors.Easy},
                  {value: numSolved.medium, color: colors.difficultyColors.Medium},
                  {value: numSolved.hard, color: colors.difficultyColors.Hard}
                ]}
                total={numSolved.total}
              /> 
              <Text style={globalStyles.moduleText}>Easy: {numSolved.easy}</Text>
              <Text style={globalStyles.moduleText}>Medium: {numSolved.medium}</Text>
              <Text style={globalStyles.moduleText}>Hard: {numSolved.hard}</Text>
            </View>
          }
          <View style={globalStyles.module}>
              <Text>Streak: </Text>
          </View>
      </View>
  )
}