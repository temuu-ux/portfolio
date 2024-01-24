import { useTheme } from "./context/ThemeContext";
import { TbCircleLetterC } from "react-icons/tb";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const exClassName = theme == "light" ? "bg-[#111827]" : "bg-gray-50";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";

  return (
    <div className={`${exClassName} `}>
      <div className="justify-center gap-2 flex px-28 py-6">
        {/*  className={`mt-1 w-4 h-4 ${text2ClassName}`} */}
        <div>
          <TbCircleLetterC />
        </div>

        <p className={`${text2ClassName}`}>|</p>

        <p className={`${text2ClassName}`}>
          Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>
    </div>
  );
}
