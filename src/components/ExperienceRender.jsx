import { experienceData } from "@/utils/experienceData";
import { useTheme } from "./context/ThemeContext";
export const ExperienceRender = () => {
  const { theme, setTheme } = useTheme();
  const exboardClassName = theme == "light" ? "bg-[#1F2937]" : "bg-[#FFF]";
  const textClassName = theme == "light" ? "text-[#F9FAFB]" : "text-[#111827]";
  const dateClassName = theme == "light" ? "text-[#E5E7EB]" : "text-[#374151]";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-gray-600";

  return (
    <div className="gap-12 flex flex-col ">
      {experienceData.map((e) => {
        return (
          <div
            className={`flex justify-between rounded-xl  gap-12 p-8 padding-[32px w-[896px] h-[288px]] ${exboardClassName}`}
          >
            <div className="text-[#14A800] width-[102px] height-[28px]">
              <img
                className=""
                src="/logo-upwork.png"
                alt=""
                width={92}
                height={28}
              />
              <p className="text-2xl ">{e.companyLogo}</p>
            </div>

            <div className=" w-[384px]  ">
              <p className={` text-xl font-bold  ${textClassName}`}>
                {e.position}
              </p>
              {e.exDetails.map((exDetails) => {
                return <li className={`${text2ClassName}`}>{exDetails}</li>;
              })}
            </div>
            <div>
              <p className={`${dateClassName}`}>{e.experiencePeriod}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
