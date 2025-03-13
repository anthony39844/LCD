import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import globalStyles from '@/styles/globalStyles'

export default function signup() {
  const router = useRouter(); 
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
    <View style={globalStyles.buttonContainer}>
      <Pressable style={globalStyles.button} onPress={() => router.push("/login")}>
        <Text style={globalStyles.buttonText}>Sign Up --{'>'}</Text>
      </Pressable>
    </View>
  </View>
  )
}