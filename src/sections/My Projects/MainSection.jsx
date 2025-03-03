import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader";
import DemoComputer from "../../components/DemoComputer";
import { myProjects } from "../../constants";
import DecryptedText from "../../components/DecryptedText";

const projectLength = myProjects.length;

const MainSection = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) => {
      if (direction === "previous") {
        return prev === 0 ? projectLength - 1 : prev - 1;
      }
      return prev === projectLength - 1 ? 0 : prev + 1;
    });
  };
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-12 w-full">
      <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
        <div className="absolute top-0 right-0">
          <img
            src={currentProject.spotlight}
            alt="spotlight"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div
          className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
          style={currentProject.logoStyle}
        >
          <img
            src={currentProject.logo}
            alt="logo"
            className="w-10 h-10 shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-5 text-white-600 my-5">
        <DecryptedText
            text={currentProject.title}
            speed={100}
            maxIterations={10}
            characters="ABCD1234!?"
            className="revealed text-white text-2xl font-semibold animatedText"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            revealDirection="end"
          />
          {/* <p className="text-white text-2xl font-semibold animatedText">
            {currentProject.title}
          </p> */}
          <DecryptedText
            text={currentProject.desc}
            speed={100}
            maxIterations={10}
            characters="ABCD1234!?"
            className="revealed animatedText"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            revealDirection="end"
          />
          <DecryptedText
            text={currentProject.subdesc}
            speed={100}
            maxIterations={10}
            characters="ABCD1234!?"
            className="revealed animatedText"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
            revealDirection="end"
          />
          {/* <p className="animatedText">{currentProject.desc}</p> */}
          {/* <p className="animatedText">{currentProject.subdesc}</p> */}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-3">
            {currentProject.tags.map((tag, index) => (
              <div key={index} className="tech-logo">
                <img src={tag.path} alt={tag.name} />
              </div>
            ))}
          </div>
          <a
            className="flex items-center gap-2 cursor-pointer text-white-600"
            href={currentProject.href}
            target="_blank"
            rel="noreferrer"
          >
            <p className="sm:px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">Check Live Site</p>
            <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
          </a>
        </div>
        <div className="flex justify-between items-center mt-7">
          <button
            className="arrow-btn"
            onClick={() => handleNavigation("previous")}
          >
            <img
              src="/assets/left-arrow.png"
              alt="left-arrow"
              className="w-4 h-4"
            />
          </button>
          <button
            className="arrow-btn"
            onClick={() => handleNavigation("previous")}
          >
            <img
              src="/assets/right-arrow.png"
              alt="right-arrow"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
      <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
        <Canvas>
          <ambientLight intensity={3.14} />
          <directionalLight position={[10, 10, 5]} />
          <Center>
            <Suspense fallback={<CanvasLoader />}>
              <group scale={2} position={[-0.3, -3, 0]} rotation={[0, -0.1, 0]}>
                <DemoComputer texture={currentProject.texture} />
              </group>
            </Suspense>
          </Center>
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default MainSection;
