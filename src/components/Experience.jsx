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
    <div className={` ${exClassName}`}>
      {/* flex flex-col gap-12 justify-center  py-24 pr-20 pl-20 */}
      <div className=" px-4 py-16 gap-12 flex-col flex  sm:max-w-7xl sm:m-auto sm:gap-12 sm:flex sm:flex-col sm:py-24 sm:px-20">
        <div className="flex gap-4 items-center flex-col">
          <button
            className={`rounded-xl text-sm px-5 py-1  ${buttonClassName}`}
          >
            Experience
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
    </div>
  );
};
export default Experience;
