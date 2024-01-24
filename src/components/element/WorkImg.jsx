import { useTheme } from "../context/ThemeContext";

export function WorkImg() {
  const { theme, setTheme } = useTheme();
  const borderClassName =
    theme == "light"
      ? "bg-[#374151] border-[#1F2937]"
      : "bg-gray-50 border-gray-100";
  return (
    <div>
      <div
        className={`w-[343px] h-[256px] p-8 flex text-center rounded-t-xl sm:w-[576px] sm:h-[480px] sm:p-12  sm:rounded-tl-xl sm:rounded-bl-xl   sm:justify-center sm:items-center sm:inline-flex ${borderClassName}`}
      >
        <img
          className="w-[279px] h-[192px]  sm:w-[480px] sm:h-96 relative rounded-xl shadow-black"
          src="Picture.png"
        />
      </div>
    </div>
  );
}
