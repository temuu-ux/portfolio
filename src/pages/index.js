import { Portfolio } from "./portfolio";
import ThemeProvider from "@/components/context/ThemeContext";
export default function Home() {
  return (
    <div className="max-w-7xl flex  flex-col justify-center align-center">
      <Portfolio />
    </div>
  );
}
