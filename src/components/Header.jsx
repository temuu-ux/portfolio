import { ImSun } from "react-icons/im";
export default function Header() {
  return (
    <div className="Header bg-blue-300 flex flex-col mt-10 ">
      <div className=" flex justify-between ">
        <div className="sWord text-3xl font-semibold">SS</div>
        <div className="Navigation flex gap-5  items-center text-gray-600 ">
          <a href="">About</a>
          <a href="#">Work</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
          <p className="text-gray-100 w-1 ">|</p>
          <div className="Actions flex gap-5 items-start">
            <p className="text-xl ">
              <ImSun />
            </p>

            <button className="button bg-black text-white rounded-xl w-32 h-8 ">
              Dowmload CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
