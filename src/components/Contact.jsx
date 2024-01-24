import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { useTheme } from "./context/ThemeContext";

export default function Contact() {
  const { theme, setTheme } = useTheme();
  const contactClassName = theme == "light" ? "bg-black" : "bg-gray-100";
  const buttonClassName =
    theme == "light"
      ? "bg-[#374151] text-[#D1D5DB]"
      : "text-gray-600 bg-gray-200 ";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";
  const text1ClassName = theme == "light" ? "text-[#F9FAFB]" : " text-gray-900";
  return (
    <div className={` ${contactClassName}`}>
      {/* flex flex-col gap-12 justify-center  py-24 pr-20 pl-20 */}
      <div className="max-w-7xl  m-auto flex flex-col gap-6 py-24 px-20">
        <div className="flex gap-4 items-center flex-col">
          <button
            className={`rounded-xl text-sm px-5 py-1  ${buttonClassName}`}
          >
            Get in touch
          </button>

          <p
            className={`w-[576px] h-[56px] text-center  text-xl font-normal flex gap-4 items-center ${text2ClassName}`}
          >
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className={` flex flex-col gap-10 ${text1ClassName}`}>
          <div
            className={`flex justify-center gap-3 text-center font-semibold text-3xl `}
          >
            <img className="w-8 h-8" src="/email.png" alt="" />
            <p>temuulenb80@gmail.com</p>
            <img className="w-10 h-10" src="/cop2.png" alt="" />
          </div>
          <div className="flex  justify-center gap-3 text-center font-semibold text-3xl">
            <img className="w-8 h-8" src="/call.png" alt="" />
            <p>+976 96440316</p>
            <img className="w-10 h-10" src="/cop2.png" alt="" />
          </div>
          <div
            className={`flex justify-center gap-3  text-center flex-col text-base font-normal ${text2ClassName}`}
          >
            <p className={`${text2ClassName} text-center text-base`}>
              You may also find me on these platforms!
            </p>
            <div
              className={`mt-5 flex  justify-center gap-4 text-xl ${text2ClassName}`}
            >
              <FiGithub />
              <FiTwitter />
              <FaFigma />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
