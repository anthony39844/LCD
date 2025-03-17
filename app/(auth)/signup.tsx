import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState, useMemo } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useColors } from "@/styles/colors";
import data from "../../data.json";

type User = {
  id: number;
  username: string;
  email: string;
  leetcodeUsername: string;
  password: string;
  streak: number;
  name: string;
};

export default function signup() {
  const colors = useColors();
  const { isDarkMode } = useDarkMode();
  const globalStyles = useMemo(() => getGlobalStyles(isDarkMode, colors), [isDarkMode]);
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<User[]>(data);
  function handleSignup() {
    if (email && password && username) {
      if (userData.find((user) => user.email === email)) {
        alert("Email already in use");
      } else if (userData.find((user) => user.username === username)) {
        alert("Username already in use");
      } else {
        setUserData((data) => [...data, { id: 1, username, email, leetcodeUsername: "leetcodeUsername", password, streak: 0, name: "name" }]);
        navigation.reset({
          index: 0,
          routes: [{ name: "(tabs)" as never, params: { screen: "home" } }],
        });
      }
    }
  }

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
              handleSignup();
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
