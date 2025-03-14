import { StyleSheet, useColorScheme } from 'react-native';

export function getGlobalStyles() {
  const theme = useColorScheme(); 
  const colors = {
    primary: theme == "light" ? "#6B95D1" : "#181818", 
    secondary: theme == "light" ? "white" : "#6B95D1",
    text: theme == "light" ? "black" : "white",
    textUnfocused: theme == "light" ? "white" : "grey",
    border: theme == "light" ? "black" : "white",
  }

  return StyleSheet.create({
    safeView: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    navbar: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      padding: 10,
      gap: 10,
      width: '100%',
    },
    navItem: {
      alignItems: 'center',
    },  
    focusedNavItem: {
      alignItems: 'center',
      borderBottomColor: colors.border,
      borderBottomWidth: 5,
      borderBottomEndRadius: 5,
      borderBottomStartRadius: 5,
    }, 
    navbarText: {
      fontFamily: 'JetBrainsMono-Regular',
      fontSize: 12,
      fontWeight: 'bold',
      paddingVertical: 10,
      color: colors.textUnfocused,
    },
    focusedNavbarText: {
      fontFamily: 'JetBrainsMono-Regular',
      fontWeight: 'bold',
      fontSize: 12,
      paddingVertical: 10,
      color: colors.text,
    },
    

    // actually global styles
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
      fontSize: 18,
      fontWeight: "bold",
    },
    secondaryBtn: {     
      backgroundColor: colors.primary, 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
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
      borderRadius: 20,
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
})};