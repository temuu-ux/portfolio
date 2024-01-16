export default function Hero() {
  return (
    <div className="container flex mt-10 w-max">
      <div className="left-body ">
        <p className="Text1 text-6xl text-gray-900 font-bold">
          Hi,I'am Vegeta ✪
        </p>
        <p className="Text2">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="mt-5">
          <p className="location">Ahmedabad, India</p>
          <p className="location">Available for new projects</p>
        </div>
        <div className="mt-5">cat ,bird,?</div>
      </div>
      <div className="right-body">
        <img className="w-72 h-80" src="/vegeta.webp" alt="" />
      </div>
    </div>
  );
}
