import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import { useNavigation } from '@react-navigation/native';



export default function signup() {
  const globalStyles = getGlobalStyles();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <View style={globalStyles.homeContainer}>
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
      <Pressable 
        style={globalStyles.button} 
        onPress={() => {
            navigation.reset({
            index: 0,
            routes: [{ name: 'home' as never }],
            });
        }}>
        <Text style={globalStyles.buttonText}>Sign Up --{'>'}</Text>
      </Pressable>
    </View>
  </View>
  )
}