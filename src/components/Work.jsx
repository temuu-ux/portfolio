import { WorkText } from "./element/WorkText";
import { WorkImg } from "./element/WorkImg";
import { useTheme } from "./context/ThemeContext";

export default function Work() {
  const { theme, setTheme } = useTheme();
  const workClassName = theme == "light" ? "bg-black" : "bg-gray";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";
  const buttonClassName =
    theme == "light"
      ? "bg-[#374151] text-[#D1D5DB]"
      : "text-gray-600 bg-gray-200 ";

  return (
    <div className={`flex flex-col gap-12  py-24 pr-20 pl-20 ${workClassName}`}>
      <div className="flex flex-col text-center  gap-4">
        <button className={`px-6 self-center rounded-xl  ${buttonClassName}`}>
          work
        </button>
        <p className={`${text2ClassName} self-center text-[20px]`}>
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="flex flex-col  gap-12">
        <div className="flex justify-center items-center  self-stretch px-8 py-0 h-[480px]">
          <WorkImg />
          < WorkText />
        </div>
        <div className="flex justify-center items-center  self-stretch px-8 py-0">
          <WorkText />
          <WorkImg />
        </div>
        <div className="flex justify-center items-center  self-stretch px-8 py-0">
          <WorkImg />
          <WorkText />
        </div>
      </div>
    </div>
  );
}
