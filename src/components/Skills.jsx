// import React from "react";
import { IoLogoJavascript } from "react-icons/io5";

import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiMongodb,
  SiTailwindcss,
  SiStorybook,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaSass, FaFigma, FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCypress } from "react-icons/tb";
import SkillsLogo from "./SkillsLogo";
import { useTheme } from "./context/ThemeContext";

const Skills = () => {
  const { theme, setTheme } = useTheme();

  const buttonClassName =
    theme == "light"
      ? "bg-[#374151] text-[#D1D5DB]"
      : "text-gray-600 bg-gray-200 ";

  const skillsClassName = theme == "light" ? "bg-black" : "bg-gray";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-[#4B5563]";
  const iconsClassName = theme == "light" ? "text-white" : "text-black";

  const icons = [
    { Icon: IoLogoJavascript, text: "JavaScript" },
    { Icon: SiTypescript, text: "TypeScript" },
    { Icon: FaReact, text: "React" },
    { Icon: SiNextdotjs, text: "Next" },
    { Icon: FaNodeJs, text: "Node" },
    { Icon: SiExpress, text: "Express" },
    { Icon: SiNestjs, text: "Nest" },
    { Icon: SiSocketdotio, text: "Socket" },
    { Icon: BiLogoPostgresql, text: "Postgre" },
    { Icon: SiMongodb, text: "MongoDB" },
    { Icon: FaSass, text: "Sass" },
    { Icon: SiTailwindcss, text: "Tailwind" },
    { Icon: FaFigma, text: "Figma" },
    { Icon: TbBrandCypress, text: "Cypress" },
    { Icon: SiStorybook, text: "Storybook" },
    { Icon: FaGitAlt, text: "Git" },
  ];

  return (
    <div
      className={`px-[20px] py-[24px] md:px-16 md:py-16 flex flex-col max-w-screen-xl mx-auto  gap-14 justify-center  pr-20 pl-20 ${skillsClassName}`}
    >
      <div className="flex justify-center text-center ">
        <h1 className={`${buttonClassName} rounded-xl text-sm px-5 py-1`}>
          Skills
        </h1>
      </div>
      <h1 className={`${text2ClassName} self-center text-[20px]`}>
        The skills, tools and technologies I am really good at:
      </h1>
      <div
        className={`flex justify-between gap-16 px-8 width={1216px} flex-wrap ${iconsClassName}`}
      >
        {icons.map(({ Icon, text }, index) => (
          <SkillsLogo id={index} Icon={Icon} text={text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
