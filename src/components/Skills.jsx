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

export default Skills = () => {
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
    <div>
      <div className="bg-gray-200 flex align-center w-fit px-6 self-center rounded-xl">
        <button className="text-gray-600 dark:text-gray-200 ">Skills</button>
      </div>
      <div>
        <p className="self-center text-[20px] text-gray-500">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div>
        {icons.map(({ Icon, text }, index) => (
          <SkillLogos id={index} Icon={Icon} text={text} key={index} />
        ))}
      </div>
    </div>
  );
};
