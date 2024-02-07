import { ImSun } from "react-icons/im";
import { useTheme } from "./context/ThemeContext";
import { LuMoonStar } from "react-icons/lu";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const useThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  

  const headerClassName = theme == "light" ? "bg-black " : "bg-white ";

  const logoClassName = theme == "light" ? "text-white" : " text-gray-900";

  const dowClassName =
    theme == "light"
      ? "bg-white text-gray-50   "
      : "bg-gray-900 text-gray-50  ";

  const pClassName =
    theme == "light" ? "sm:text-[#111827]" : "sm:text-[#F9FAFB]";

  const text2ClassName =
    theme == "light" ? "sm:text-[#D1D5DB]" : "sm:text-gray-600";

  const sunClassName = theme === "light" ? <LuMoonStar /> : <ImSun />;

  return (
    <div className={`${headerClassName} `}>
      <div className=" sm:m-auto  sm:flex justify-between p-[16px] sm:max-w-7xl sm:px-8 sm:py-4 h-fit ">
        <div className={`${logoClassName} text-3xl font-semibold`}>SS</div>
        <div
          className={`hidden sm:block  ${text2ClassName} sm:flex gap-5  items-center text-base`}
        >
          <a href="#section1">About</a>
          <a href="#section2">Work</a>
          <a href="#section3">Testimonials</a>
          <a href="#section4">Contact</a>
          <p className="text-gray-100 w-1 ">|</p>
          <div className=" flex gap-5 items-start">
            <button
              onClick={useThemeHandler}
              className={`${sunClassName} text-xl mt-2`}
            >
              {sunClassName}
            </button>

            <button className={`${dowClassName} w-[136px] h-[36px] rounded-xl`}>
              <p className={`${pClassName}`}>Dowmload CV</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
