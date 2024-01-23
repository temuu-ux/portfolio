import { Button } from "./element";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 justify-center bg-gray-100 py-24 pr-20 pl-20">
      <div className="flex gap-4 items-center flex-col">
        <Button buttName="Get in touch" />
        <p className="max-w-xl  text-xl text-gray-600 font-normal flex gap-4 items-center ">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex justify-center gap-3 text-gray-900 text-center font-semibold text-3xl">
          <img src="/email.png" alt="" />
          <p>temuulenb80@gmail.com</p>
          <img src="/cop2.png" alt="" />
        </div>
        <div className="flex justify-center gap-3 text-gray-900 text-center font-semibold text-3xl">
          <img src="/call.png" alt="" />
          <p>+976 96440316</p>
          <img src="/cop2.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-3 text-gray-400 text-center flex-col text-base font-normal">
        <p>You may also find me on these platforms!</p>
        <div className="flex justify-center gap-3  text-gray-600">
          <FiGithub />
          <FiTwitter />
          <FaFigma />
        </div>
      </div>
    </div>
  );
}
