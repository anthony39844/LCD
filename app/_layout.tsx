import { DarkModeProvider } from "@/contexts/darkModeContext";
import { ApiProvider } from "@/contexts/apiContext";
import App from "./app";

export default function Layout() {
  return (
    <DarkModeProvider>
      <ApiProvider>
        <App />
      </ApiProvider>
    </DarkModeProvider>
  );
}
