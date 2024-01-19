import { ExperienceRender } from "./ExperienceRender";

export const Experience = () => {
  return (
    <div className="flex flex-col gap-10 justify-center bg-gray-100">
      <div className="flex gap-4 items-center flex-col">
        <button className="text-gray-600 bg-gray-200 rounded-md w-24 ">
          experience
        </button>
        <p className="text-gray-600 text-xl">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex gap-10 justify-center ">
        <ExperienceRender />
      </div>
    </div>
  );
};
export default Experience;
