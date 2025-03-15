import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState, useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useDarkMode } from "@/contexts/darkModeContext";
export default function login() {
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);

  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
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
              routes: [{ name: "(tabs)" as never, params: { screen: "home" } }],
            });
          }}
        >
          <Text style={globalStyles.buttonText}>Log In --{">"}</Text>
        </Pressable>
      </View>
    </View>
  );
}
