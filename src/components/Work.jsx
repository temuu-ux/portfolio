import { WorkText } from "./element/WorkText";
import { WorkImg } from "./element/WorkImg";

export default function Work() {
  return (
    <div className="py-24 pr-20 pl-20">
      <div className="text-center gap-4">
        <button className="px-6 self-center rounded-xl text-gray-600  bg-gray-200 ">
          work
        </button>
        <p className="self-center text-[20px] text-gray-500 text-center">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center gap-12 self-stretch px-8 py-0">
          <WorkImg />
          <WorkText />
        </div>
        <div className="flex justify-center items-center gap-12 self-stretch px-8 py-0">
          <WorkText />
          <WorkImg />
        </div>
        <div className="flex justify-center items-center gap-12 self-stretch px-8 py-0">
          <WorkImg />
          <WorkText />
        </div>
      </div>
    </div>
  );
}
