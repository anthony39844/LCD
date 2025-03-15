import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useDarkMode } from "@/contexts/darkModeContext";

export default function signup() {
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode), [isDarkMode]);
  const navigation = useNavigation();
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
      <View style={{ gap: 20 }}>
        <View style={globalStyles.buttonContainer}>
          <Pressable
            style={globalStyles.button}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [
                  { name: "(tabs)" as never, params: { screen: "home" } },
                ],
              });
            }}
          >
            <Text style={globalStyles.buttonText}>Sign Up --{">"}</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => router.replace("/login")}>
          <Text>Already have an account?</Text>
        </Pressable>
      </View>
    </View>
  );
}
