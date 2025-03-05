import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("vikaschouhan360@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 md:grid-rows-6 md:grid-cols2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="avatar"
              className="w-full sm:h-[276px] h-fit object-contain"
            ></img>
            <div>
              <p className="grid-headtext">
                Hi, I&lsquo;m{" "}
                <span className="px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                  Vikas Chouhan
                </span>
              </p>
              <p className="grid-subtext">
                With 2.5 years of experience, I have honed my skills in frontend
                and backend development, with a focus on React and Node.js.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                <span className="px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                  Tech Stack
                </span>
              </p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 21.2080807,
                    lng: 81.3530134,
                    text: "I'm here !",
                    color: "white",
                    size: 300,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                <span className="px-2 sm:mt-0 mt-4 md:px-1 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                  {" "}
                  I work remotely
                </span>{" "}
                across most timezones.
              </p>
              <p className="grid-subtext">
                I&lsquo;m based in India, with remote work available.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[268px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                My Passion for{" "}
                <span className="px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                  Coding
                </span>
              </p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion. I enjoy
                exploring new technologies, and enhancing my skills. Always open
                for new challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover z-10 sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">
                <span className="px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                  Contact me
                </span>
              </p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-lg md:text-xl font-medium text-gray_gradient text-white">
                  vikaschouhan360@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
