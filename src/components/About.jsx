import { useTheme } from "./context/ThemeContext";

export default function About() {
  const { theme, setTheme } = useTheme();

  const aboutClassName = theme == "light" ? "bg-[#111827]" : "bg-gray-50";

  const buttonClassName =
    theme == "light"
      ? "bg-[#374151] text-[#D1D5DB]"
      : "text-gray-600 bg-gray-200 ";

  const text1ClassName = theme == "light" ? "text-[#F9FAFB]" : " text-gray-900";
  const text2ClassName = theme == "light" ? "text-[#D1D5DB]" : "text-gray-600";

  return (
    <div className={`${aboutClassName}  py-24 pr-20 pl-20 `}>
      <div className=" flex flex-col gap-12">
        <div className="flex justify-center text-center ">
          <button
            className={`rounded-xl text-sm px-5 py-1  ${buttonClassName}`}
          >
            about me
          </button>
        </div>
        <div className="flex justify-between ">
          <div className=" left flex min-w-96 w-[584px] h-[694px] flex-col items-start text-gray-50">
            <div className="image absolute z-10 mr-[30px]">
              <img
                className="w-[400px] h-[480px] border-solid border-[white] border-[8px]"
                src="./vegeta2.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="Right max-w-xl w-[584px] h-[694px] gap-4 flex flex-col">
            <h3
              className={`text-3xl font-semibold font-inter  not-italic ${text1ClassName}`}
            >
              Curious about me? Here you have it:
            </h3>
            <div
              className={`text-base  h-28 font-normal gap-4 flex flex-col font-inter  not-italic ${text2ClassName}`}
            >
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex">
                <div>
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <div>
                  <li>Avid learner</li>
                  <li>Aspiring indie hacker</li>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
