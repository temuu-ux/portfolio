import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { useTheme } from "./context/ThemeContext";

export default function Hero() {
  const { theme, setTheme } = useTheme();

  const heroClassName = theme == "light" ? "bg-black" : "bg-gray";

  const text1ClassName = theme == "light" ? "text-white" : "text-gray-900 ";

  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-gray-600";

  const imgClassName =
    theme == "light"
      ? "bg-[#374151] border-black "
      : "bg-gray-200  border-white";

  return (
    <div
      className={`${heroClassName} flex   p-[50px] gap-28 py-24 pr-20 pl-20`}
    >
      <div className="left-body max-w-3xl h-96 flex gap-8 flex-col">
        <p className={`${text1ClassName} text-6xl  font-bold`}>
          Hi, I'am Vegeta ✪
        </p>
        <p
          className={`${text2ClassName} Text2 text-base font-inter  not-italic`}
        >
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className={`${text2ClassName} gap-3 flex flex-col `}>
          <div className="flex gap-3 ">
            <img className="" src="./Icon.png" alt="" />
            <p className="location "> Ahmedabad, India</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className=" flex flex-col justify-center items-center w-3.5">
              <img className="text-center " src="./Icon2.png" alt="" />
            </div>

            <p className="location">Available for new projects</p>
          </div>
        </div>
        <div className={`mt-5 flex gap-4 text-xl ${text2ClassName}`}>
          <FiGithub />
          <FiTwitter />
          <FaFigma />
        </div>
      </div>
      <div className="w-80 h-[360px] right-body max-w-sm max-h-80 ">
        <div className="w-80 h-[360px] relative ">
          <div
            className={`w-[280px] h-80 left-[40px] top-[40px] absolute ${imgClassName}`}
          ></div>
          <img
            className={`w-[280px] h-80 left-0 top-0 absolute border-8 ${imgClassName}`}
            src="./vegeta.jpeg "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
