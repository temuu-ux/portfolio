import Image from "next/image";
import { Inter } from "next/font/google";
import { Portfolio } from "./portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-7xl flex  flex-col justify-center align-center">
      <Portfolio />
    </div>
  );
}
