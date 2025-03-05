import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense, useState } from "react";
import Developer from "../components/Developer";
import BlurText from "../components/blurText";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        {/* <h3 className="head-text">My Experience</h3> */}
        <BlurText
          text="My Experience"
          delay={150}
          animateBy="words"
          direction="top"
          className="head-text text-white-800"
        />
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[0, 10, 0]} intensity={0.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 1.5} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ name, pos, icon, duration, title, animation, id }) => (
                  <div
                    className="work-content_container group"
                    key={id}
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">
                        <span className="px-2 sm:mt-0 mt-4 md:px-3 bg-[#0a66c2] text-[#FBF5E5] rounded-lg">
                          {name}
                        </span>
                      </p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transiion ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
