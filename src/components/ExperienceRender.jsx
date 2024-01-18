import { experienceData } from "@/utils/experienceData";

export const ExperienceRender = () => {
  <div>
    {experienceData.map((e) => (
      <div className="2stRow flex flex-row justify-between text-gray-600 border">
        <div className="text-[#14A800]">
          <p className="text-2xl">{e.companyLogo}</p>
        </div>

        <div>
          <p className="text-black text-xl font-bold">{e.position}</p>
          {e.exDetails.map((e) => {
            return <li>{e}</li>;
          })}
        </div>
        <div>
          <p>{e.experiencePeriod}</p>
        </div>
      </div>
    ))}
  </div>;
};
