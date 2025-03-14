import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import Navbar from '@/components/Navbar'

export default function home() {
  const globalStyles = getGlobalStyles();

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
      <View style={globalStyles.module}>
        <Text>Streak: </Text>
      </View>
      <Navbar clicked="home" />
    </View>
  )
}