import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import {getGlobalStyles} from "@/styles/globalStyles";

export default function Index() {
  const router = useRouter(); 
  const globalStyles = getGlobalStyles();

  return (
      <View style={globalStyles.homeContainer}>
        <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
        <View style={globalStyles.buttonContainer}>
          <Pressable style={globalStyles.button} onPress={() => router.push("/signup")}>
            <Text style={globalStyles.buttonText}>Sign Up</Text>
          </Pressable>
          <Pressable style={globalStyles.button} onPress={() => router.push("/login")}>
            <Text style={globalStyles.buttonText}>Log In</Text>
          </Pressable>
        </View>
      </View>
  );
}
