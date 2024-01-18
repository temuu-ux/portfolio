import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="container flex mt-10 bg-orange-400 p-[50px] gap-28">
      <div className="left-body max-w-3xl h-96 flex gap-8 flex-col">
        <p className="Text1 text-6xl text-gray-900 font-bold">
          Hi,I'am Vegeta ✪
        </p>
        <p className="Text2 text-base text-gray-600">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="gap-20 ">
          <div className="flex">
            <img src="./icon.svg" alt="" />
            <p className="location "> Ahmedabad, India</p>
          </div>
          <div className="flex">
            <img src="./icon.png" alt="" />
            <p className="location">Available for new projects</p>
          </div>
        </div>
        <div className="mt-5 flex gap-4 ">
          <FiGithub />
          <FiTwitter />
          <FaFigma />
        </div>
      </div>
      <div className="right-body max-w-sm max-h-80 ">
        <div>
          {" "}
          <div className="w-64 -72 bg-gray-200  ">
            <img className="w-64 h-72" src="./vegeta.jpeg " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
