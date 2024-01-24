import { useTheme } from "./context/ThemeContext";
import { TbCircleLetterC } from "react-icons/tb";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const exClassName = theme == "light" ? "bg-[#111827]" : "bg-gray-50";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";

  return (
    <div className={`${exClassName} `}>
      <div className="flex justify-center gap-2 px-0 py-6  sm:justify-center sm:gap-2 sm:flex sm:px-28 sm:py-6">
        <p>
          <TbCircleLetterC className={`mt-1 ${text2ClassName}`} />
        </p>

        <p className={`${text2ClassName}`}>|</p>

        <p className={`${text2ClassName} text-sm`}>
          Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>
    </div>
  );
}
