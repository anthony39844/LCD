import { StyleSheet } from "react-native";

export function getGlobalStyles(isDarkMode: boolean) {
  const colors = {
    primary: !isDarkMode ? "#6B95D1" : "#181818",
    secondary: !isDarkMode ? "white" : "#658DAF",
    text: !isDarkMode ? "black" : "white",
    textUnfocused: !isDarkMode ? "white" : "grey",
    border: !isDarkMode ? "black" : "white",
  };
  return StyleSheet.create({
    safeView: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    container: {
      backgroundColor: colors.primary,
      height: "100%",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    title: {
      fontFamily: "JetBrainsMono-Regular",
      fontSize: 36,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.text,
    },


    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      gap: 20,
    },
    button: {
      backgroundColor: colors.secondary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: "center",
      alignSelf: "stretch",
      borderColor: colors.border,
      borderWidth: 1,
    },
    buttonText: {
      fontFamily: "JetBrainsMono-Regular",
      color: colors.text,
      fontSize: 15,
      fontWeight: "bold",
    },
    secondaryBtn: {
      backgroundColor: colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
      alignItems: "center",
      alignSelf: "stretch",
      borderColor: colors.border,
      borderWidth: 1,
    },

    inputBox: {
      backgroundColor: colors.secondary,
      borderRadius: 20,
      padding: 10,
      margin: 10,
      width: 300,
      textAlign: "center",
    },

    module: {
      backgroundColor: colors.secondary,
      padding: 20,
      margin: 10,
      borderRadius: 40,
      width: 300,
      borderColor: colors.border,
      borderWidth: 1,
      alignItems: "center",
      gap: 10,
    },
    moduleText: {
      fontFamily: "JetBrainsMono-Regular",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    moduleTitle: {
      fontFamily: "JetBrainsMono-Regular",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    }, 
})};
