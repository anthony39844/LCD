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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "JetBrainsMono-Regular",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "white", 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
    alignSelf: "stretch"
  },
  buttonText: {
    fontFamily: "JetBrainsMono-Regular",
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});