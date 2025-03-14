import { View, Text, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'
import {getGlobalStyles} from "@/styles/globalStyles";
import { useNavigation } from '@react-navigation/native';

export default function login() {
  const globalStyles = getGlobalStyles();
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={globalStyles.homeContainer}>
      <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
      <View>
        <TextInput
          style={globalStyles.inputBox}
          placeholder="Email or Username"
          placeholderTextColor="black"
          value={user}
          onChangeText={(email) => setUser(email)}
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
          <Text style={globalStyles.buttonText}>Log In --{'>'}</Text>
        </Pressable>
      </View>
    </View>
  )
}