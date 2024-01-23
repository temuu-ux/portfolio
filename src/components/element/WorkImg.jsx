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
        className={`w-[576px] h-[480px] p-12  rounded-tl-xl rounded-bl-xl   justify-center items-center inline-flex ${borderClassName}`}
      >
        <img
          className="w-[480px] h-96 relative rounded-xl shadow"
          src="Picture.png"
        />
      </div>
    </div>
  );
}
