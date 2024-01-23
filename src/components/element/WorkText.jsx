import { useTheme } from "../context/ThemeContext";

export function WorkText() {
  const { theme, setTheme } = useTheme();
  const workClassName = theme == "light" ? "bg-[#1F2937]" : "bg-[#FFF]";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";
  const textClassName = theme == "light" ? "text-[#F9FAFB]" : "text-[#111827]";
  const buttonClassName =
    theme == "light" ? "bg-[#374151] text-[#D1D5DB]" : " bg-gray-200 ";
  return (
    <div
      className={`${workClassName} w-[576px] h-[480px]  `}
    >
      <div className=" p-12 rounded-tl-xl rounded-bl-xl flex-col justify-start items-center gap-6 inline-flex padding-[48px]">
        <div
          className={`self-stretch  text-xl font-semibold font-['Inter'] leading-7 ${textClassName}`}
        >
          Fiskil
        </div>
        <div
          className={`self-stretch  text-base font-normal font-['Inter'] leading-normal ${text2ClassName}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </div>
        <div className="w-[480px] gap-2 self-stretch justify-start items-center  inline-flex flex-wrap">
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            React
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Next.js
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Typecripts
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Nest.js
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            PostgreSQL
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Tailwindcss
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Figma
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Cypress
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Storybook
          </div>
          <div
            className={`px-5 py-1 rounded-xl justify-center items-center flex  text-sm font-medium font-['Inter'] leading-tight ${buttonClassName}`}
          >
            Git
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div className="p-1.5 rounded-lg justify-center items-center flex">
          <div className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
}
