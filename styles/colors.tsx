import { useDarkMode } from "@/contexts/darkModeContext";
export function useColors() {
    const {isDarkMode} = useDarkMode(); 
    const themeColors = {
        primary: !isDarkMode ? "#6B95D1" : "#181818", 
        secondary: !isDarkMode ? "white" : "#658DAF",
        text: !isDarkMode ? "black" : "white",
        textUnfocused: !isDarkMode ? "white" : "grey",
        border: !isDarkMode ? "black" : "white",
    }
    const difficultyColors = {
        "Easy": "#46c6c2",
        "Medium": "#fac31d",
        "Hard": "#f8615c"
    };
    return { themeColors, difficultyColors };
}