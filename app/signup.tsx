import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import globalStyles from '@/styles/globalStyles'


export default function signup() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
    <View>
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Password"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
    <View style={globalStyles.buttonContainer}>
      <Pressable style={globalStyles.button} onPress={() => router.push("/login")}>
        <Text style={globalStyles.buttonText}>Sign Up --{'>'}</Text>
      </Pressable>
    </View>
  </View>
  )
}