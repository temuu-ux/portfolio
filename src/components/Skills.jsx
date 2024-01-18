import React from "react";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPython,
} from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import SkillRender from "./SkillRender";

const Skills = () => {
  const icons = [
    { Icon: BiLogoJavascript, text: "JavaScript" },
    { Icon: BiLogoTypescript, text: "Typescript" },
    { Icon: BiLogoReact, text: "React" },
    { Icon: BiLogoNodejs, text: "Node.js" },
    { Icon: BiLogoPython, text: "Python" },
    { Icon: SiNestjs, text: "Nest.js" },
    { Icon: SiSocketdotio, text: "Socket.io" },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-gray-200 flex align-center w-fit px-6 self-center rounded-xl gap-5">
        <button className="text-gray-600 dark:text-gray-200 ">Skills</button>
      </div>
      <div>
        <p className="self-center text-[20px] text-gray-500 text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex flex-col-reverse  gap-8">
        <div className="flex gap-x-20 ">
          {icons.map(({ Icon, text }, index) => (
            <SkillRender id={index} Icon={Icon} text={text} key={index} />
          ))}
        </div>
        <div className="flex gap-x-20 ">
          {icons.map(({ Icon, text }, index) => (
            <SkillRender id={index} Icon={Icon} text={text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
