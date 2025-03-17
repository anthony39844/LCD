import { View, Text, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState, useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useColors } from "@/styles/colors";
import data from "../../data.json";
import { useRouter } from "expo-router";

export default function login() {
  const colors = useColors();
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode, colors), [isDarkMode]);
  const router = useRouter();
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function checkCredentials() {
    for (let i = 0; i < data.length; i++) {
      if (
        (data[i].email === user || data[i].username) &&
        data[i].password === password
      ) {
        return true;
      }
    }
    return false;
  }

  function handleLogin() {
    if (checkCredentials()) {
      navigation.reset({
        index: 0,
        routes: [{ name: "(tabs)" as never, params: { screen: "home" } }],
      });
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            <Pressable style={globalStyles.button} onPress={() => handleLogin()}>
              <Text style={globalStyles.buttonText}>Log In --{">"}</Text>
            </Pressable>
            <Pressable onPress={() => router.replace("/signup")}>
              <Text style={globalStyles.smallText}>Create an account</Text>
            </Pressable>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
