import { experienceData } from "@/utils/experienceData";

export const ExperienceRender = () => {
  return (
    <div>
      {experienceData.map((e) => {
        return (
          <div className=" flex  justify-between text-gray-600 border gap-10 mb-10">
            <div className="text-[#14A800]">
              <p className="text-2xl ">{e.companyLogo}</p>
            </div>

            <div className=" max-w-full ">
              <p className="text-black text-xl font-bold  ">{e.position}</p>
              {e.exDetails.map((exDetails) => {
                return (
                  <li className="  text-left text-gray-600 w-96">
                    {exDetails}
                  </li>
                );
              })}
            </div>
            <div>
              <p>{e.experiencePeriod}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
