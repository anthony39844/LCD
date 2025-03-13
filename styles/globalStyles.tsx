import { StyleSheet } from 'react-native';


const globalStyles = StyleSheet.create({
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


export default globalStyles;