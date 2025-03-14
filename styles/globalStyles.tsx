import { StyleSheet } from 'react-native';


const globalStyles = StyleSheet.create({
    container: {
      backgroundColor: "lightblue",
      flex: 1,
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    title: {
      fontFamily: "JetBrainsMono-Regular",
      fontSize: 36,
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
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: "center",
      alignSelf: "stretch", 
      borderColor: "black",
      borderWidth: 1,
    },
    buttonText: {
      fontFamily: "JetBrainsMono-Regular",
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
    },
    inputBox: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        margin: 10,
        width: 300,
        textAlign: "center",
    },
    module: {
      backgroundColor: "white",
      padding: 20,
      margin: 10,
      borderRadius: 20,
      width: 300,
      borderColor: "black",
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
});


export default globalStyles;