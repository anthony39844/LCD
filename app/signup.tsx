import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from "expo-router";
import globalStyles from '@/styles/globalStyles'


export default function signup() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
    <View>
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={globalStyles.inputBox}
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
    <View style={globalStyles.buttonContainer}>
      <Pressable style={globalStyles.button} onPress={() => router.push("/home")}>
        <Text style={globalStyles.buttonText}>Sign Up --{'>'}</Text>
      </Pressable>
    </View>
  </View>
  )
}