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
    <div
      className={`px-4 py-16  sm:flex sm:flex-col sm:gap-12  sm:py-24 sm:pr-20 sm:pl-20 ${workClassName}`}
    >
      <div className="flex flex-col gap-4  sm:max-w-full sm:m-auto sm:flex sm:flex-col sm:gap-12">
        <div className="flex flex-col text-center gap-4 sm:flex sm:flex-col sm:text-center  sm:gap-4">
          <button className={`px-6 self-center rounded-xl  ${buttonClassName}`}>
            work
          </button>
          <p
            className={`${text2ClassName} text-[18px] font-normal not-italic self-center sm:text-[20px]`}
          >
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-12">
          <div className=" sm:flex sm:justify-center sm:items-center  sm:self-stretch sm:px-8 sm:py-0 ">
            <WorkImg />
            <WorkText />
          </div>
          <div className="sm: flex flex-col-reverse sm:justify-center sm:flex-row sm:items-center  sm:self-stretch sm:px-8 sm:py-0">
            <WorkText />
            <WorkImg />
          </div>
          <div className="sm:flex sm:justify-center sm:items-center  sm:self-stretch sm:px-8 sm:py-0">
            <WorkImg />
            <WorkText />
          </div>
        </div>
      </div>
    </div>
  );
}
