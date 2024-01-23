import { ImSun } from "react-icons/im";
import { useTheme } from "./context/ThemeContext";
import { LuMoonStar } from "react-icons/lu";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const useThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const headerClassName =
    theme == "light"
      ? "flex flex-col py-4 px-20 bg-black"
      : "flex flex-col py-4 px-20 bg-white";

  const logoClassName =
    theme == "light"
      ? "text-3xl font-semibold text-white"
      : "text-3xl font-semibold  text-gray-900";

  const dowClassName =
    theme == "light"
      ? "bg-white gray-dark-50 rounded-xl w-[136px] h-[36px] "
      : " bg-gray-900 text-gray-50 rounded-xl w-[136px] h-[36px] ";

  const sunClassName = theme === "light" ? <LuMoonStar /> : <ImSun />;

  return (
    <div className={headerClassName}>
      <div className=" flex justify-between ">
        <div className={logoClassName}>SS</div>
        <div className=" flex gap-5  items-center text-gray-600 text-base">
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

            <button className={dowClassName}>Dowmload CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
