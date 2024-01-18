import { ExperienceRender } from "./ExperienceRender";

export default function Experience() {
  return (
    <div className="flex justify-center bg-purple-500">
      <div className="flex gap-4 items-center flex-col">
        <button className="text-gray-600 bg-gray-200 rounded-md w-24 ">
          experience
        </button>
        <p className="text-gray-600 text-xl">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div>
        <ExperienceRender />
      </div>
    </div>
  );
}
