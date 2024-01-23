import ThemeProvider from "@/components/context/ThemeContext";
import { Button } from "@/components/element";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
