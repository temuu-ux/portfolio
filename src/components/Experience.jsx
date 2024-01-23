import { useTheme } from "./context/ThemeContext";
import { ExperienceRender } from "./ExperienceRender";

export const Experience = () => {
  const { theme, setTheme } = useTheme();

  const exClassName = theme == "light" ? "bg-[#111827]" : "bg-gray-50";
  const buttonClassName =
    theme == "light"
      ? "bg-[#374151] text-[#D1D5DB]"
      : "text-gray-600 bg-gray-200 ";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";
  return (
    <div
      className={`flex flex-col gap-10 justify-center  py-24 pr-20 pl-20 ${exClassName}`}
    >
      <div className="flex gap-4 items-center flex-col">
        <button className={`rounded-xl text-sm px-5 py-1  ${buttonClassName}`}>
          experience
        </button>
        <p
          className={`${text2ClassName} text-xl font-inter font-normal not-italic`}
        >
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex justify-around  ">
        <ExperienceRender />
      </div>
    </div>
  );
};
export default Experience;
