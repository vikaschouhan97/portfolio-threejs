import { Canvas } from "@react-three/fiber";
// import BlurText from "../components/blurText";
import RotatingText from "../components/rotatingText";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
// import FloatingWords from "../components/FloatingWords";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // const x = useControls('FloatingWords', {
  //   positionX: {
  //     value: 15.2,
  //     min: -10,
  //     max: 30,
  //   },
  //   positionY: {
  //     value: -1.8,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: -4.0,
  //     min: -30,
  //     max: 10,
  //   },
  // });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-24 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans mb-4">
          Hey, my name is{" "}
          <span className="px-2 sm:px-2 sm:mt-0 mt-4 md:px-3 bg-[#872341] text-[#FBF5E5] rounded-lg">
            Vikas
          </span>{" "}
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient sm:flex mx-auto">
          Turning Ideas into{" "}
          {/* <BlurText
            text="Turning Ideas into "
            delay={150}
            animateBy="words"
            direction="top"
            className=" text-white sm:flex mx-auto"
          /> */}
          <RotatingText
            texts={["Software", "Products", "Services", "Brands"]}
            mainClassName="px-2 sm:px-2 sm:mt-0 mt-4 md:px-3 bg-[#872341] text-[#FBF5E5] overflow-hidden mx-4 justify-center align-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          {/* <fog attach="fog" args={["#202025", 0, 80]} /> */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 22]} />
            <HeroCamera isMobile={isMobile}>
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0.2, 0.4, 0]}
              scale={sizes.deskScale}
            />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
              {/* <FloatingWords position={[x.positionX, x.positionY, x.positionZ]} /> */}
            </group>
            <ambientLight intensity={1.5} />
            <directionalLight position={[50, 30, 20]} intensity={1.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
