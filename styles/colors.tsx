import { useColorScheme } from 'react-native'

export function useColors() {
    const theme = useColorScheme(); 
    const themeColors = {
        primary: theme == "light" ? "#6B95D1" : "#181818", 
        secondary: theme == "light" ? "white" : "#658DAF",
        text: theme == "light" ? "black" : "white",
        textUnfocused: theme == "light" ? "white" : "grey",
        border: theme == "light" ? "black" : "white",
    }
    const difficultyColors = {
        "Easy": "#46c6c2",
        "Medium": "#fac31d",
        "Hard": "#f8615c"
    };
    return { themeColors, difficultyColors };
}