import { useTheme } from "./context/ThemeContext";
export default function Footer() {
  const { theme, setTheme } = useTheme();
  const exClassName = theme == "light" ? "bg-[#111827]" : "bg-gray-50";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";
  return (
    <div
      className={`${exClassName} justify-center gap-2 items-center flex px-28 py-6`}
    >
      <div className="w-[16px] h-[16p] mt-1">
        <img src="/icon.png" alt="" />
      </div>
      <div className="text-gray-100 w-1">|</div>
      <div className="w-[335px] h-[20px]">
        <p className={`${text2ClassName}`}>
          Designed and coded with ❤️ by Sagar Shah
        </p>
      </div>
    </div>
  );
}
