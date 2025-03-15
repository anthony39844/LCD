import { StyleSheet } from 'react-native';
import { useColors } from './colors';

export function getGlobalStyles() {
  const colors = useColors();
  
  return StyleSheet.create({
    safeView: {
      flex: 1,
      backgroundColor: colors.themeColors.primary,
    },
    container: {
      backgroundColor: colors.themeColors.primary,
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
      color: colors.themeColors.text,
    },


    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      gap: 20,
    },
    button: {
      backgroundColor: colors.themeColors.secondary, 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: "center",
      alignSelf: "stretch", 
      borderColor: colors.themeColors.border,
      borderWidth: 1,
    },
    buttonText: {
      fontFamily: "JetBrainsMono-Regular",
      color: colors.themeColors.text,
      fontSize: 15,
      fontWeight: "bold",
    },
    secondaryBtn: {     
      backgroundColor: colors.themeColors.primary, 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
      alignItems: "center",
      borderColor: "transparent",
      borderWidth: 1,
    },

    inputBox: {
        backgroundColor: colors.themeColors.secondary,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        width: 300,
        textAlign: "center",
    },


    module: {
      backgroundColor: colors.themeColors.secondary,
      padding: 20,
      margin: 10,
      borderRadius: 40,
      width: 300,
      borderColor: colors.themeColors.border,
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