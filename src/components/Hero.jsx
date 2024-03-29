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
      className={`${heroClassName} `}
      //flex   p-[50px] gap-28 py-24 pr-20 pl-20
    >
      <div
        className={`flex flex-col-reverse gap-12 justify-center px-4 py-16 items-center  sm:gap-28 sm:py-24 sm:px-20 sm:max-w-7xl sm:m-auto  sm:flex sm:flex-row`}
      >
        <div className=" sm:left-body  h-96 flex gap-8 flex-col ">
          <p
            className={`${text1ClassName}  flex text-4xl font-semibold  sm:text-6xl  sm:font-bold`}
          >
            Hi, I'am Vegeta ✪
          </p>
          <p
            className={`${text2ClassName}  flex leading-6  text-base   not-italic max-w-[700px]`}
          >
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className={`${text2ClassName} gap-3 flex flex-col `}>
            <div className="flex gap-3 ">
              <SlLocationPin className=" sm:flex-row flex-col justify-center items-center w-6 h-6" />
              <p className="location "> Ahmedabad, India</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className=" flex flex-col justify-center items-center w-6 h-6">
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

        <div className="w-[340px] h-[300px] flex items-center justify-center sm:w-[400px] sm:h-[360px] relative sm:flex sm:justify-center sm:items-center">
          <div
            className={`w-[260px] h-[280px] top-[20px]  sm:w-[280px] sm:h-[320px] sm:left-[40px] sm:top-[40px] absolute ${imgClassName}`}
          ></div>
          <img
            className={`w-[240px] h-[280px]  sm:w-[280px] sm:h-[320px] sm:left-0 sm:top-0 absolute border-8  ${imgClassName}`}
            src="./vegeta.jpeg "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
