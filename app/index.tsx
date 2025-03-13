import { Text, View, Pressable, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "@/styles/globalStyles";

export default function Index() {
  const router = useRouter(); 

  return (
      <View style={globalStyles.container}>
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
