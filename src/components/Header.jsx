export default function Header() {
  return (
    <div className="Header ">
      <div className=" flex justify-around">
        <div className="sWord">SS</div>
        <div className="Navigation flex gap-5">
          <a href="">About</a>
          <a href="#">Work</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact</a>
          <p className="text-gray-100 w-1 ">|</p>
          <div className="Actions flex gap-4">
            <img className="w-6 h-6" src="/icon Button.png" alt="" />
            <button className="button">Dowmload CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}
