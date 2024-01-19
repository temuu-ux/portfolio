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

const Skills = () => {
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
    <div className="px-[20px] py-[24px] md:px-16 md:py-16 flex flex-col max-w-screen-xl mx-auto  gap-14 justify-center ">
      <div className="bg-gray-200 flex align-center w-fit px-6 self-center rounded-xl dark:bg-[#374151]">
        <h1 className="text-gray-600 dark:text-gray-200">Skills</h1>
      </div>
      <h1 className="self-center text-[20px] text-gray-500 dark:text-[#D1D5DB]">
        The skills, tools and technologies I am really good at:
      </h1>
      <div className="grid grid-rows-6 md:grid-rows-2 grid-flow-col gap-16">
        {icons.map(({ Icon, text }, index) => (
          <SkillsLogo id={index} Icon={Icon} text={text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
