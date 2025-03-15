import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import Calendar from '@/components/Calendar';
import { useRouter } from 'expo-router';

export default function home() {
  const globalStyles = getGlobalStyles();
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      <View style={globalStyles.module}>
        <Text style={globalStyles.moduleText}>Daily Question</Text>
        <Text style={globalStyles.moduleText}>Question 1</Text>
        <Pressable style={globalStyles.secondaryBtn}>
            <Text style={globalStyles.buttonText}>Start Coding!</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => router.push("/streak")}>
        <View style={globalStyles.module}>
          <Text style={globalStyles.moduleText}>Streak: </Text>
          <Calendar full={false}/>
        </View>
      </Pressable>
    </View>
  )
}