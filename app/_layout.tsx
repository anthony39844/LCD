import { DarkModeProvider } from "@/contexts/darkModeContext";
import App from "./app";

export default function Layout() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
