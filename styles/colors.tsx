import { useDarkMode } from "@/contexts/darkModeContext";
export function useColors() {

const { isDarkMode } = useDarkMode();
  return {
    primary:!isDarkMode ? "#6B95D1" : "#181818",
    secondary:!isDarkMode ? "white" : "#658DAF",
    text:!isDarkMode ? "black" : "white",
    textUnfocused:!isDarkMode ? "white" : "grey",
    border:!isDarkMode ? "black" : "white",
  };
}
