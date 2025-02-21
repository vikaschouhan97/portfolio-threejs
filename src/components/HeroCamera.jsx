import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";
import PropTypes from "prop-types";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMobile) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 5, state.pointer.x / 5, 0],
        0.2,
        delta
      );
    }
  });
  return <group ref={groupRef}>{children}</group>;
};

HeroCamera.propTypes = {
  isMobile: PropTypes.bool,
  children: PropTypes.node,
};
export default HeroCamera;
