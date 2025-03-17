import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo } from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import DonutChart from '@/components/donutChart';
import { useColors } from '@/styles/colors';
import { useDarkMode } from '@/contexts/darkModeContext';
import { useApiContext } from '@/contexts/apiContext';

export default function Profile() {
  const colors = useColors();
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode, colors), [isDarkMode]);
  const { numSolved, userIcon } = useApiContext();

  return (
      <View style={globalStyles.container}>
          <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, padding: 20 }}
          >
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
            <View style={globalStyles.module}>
              <Text>Streak: </Text>
            </View>
          </ScrollView>
      </View>
  )
}