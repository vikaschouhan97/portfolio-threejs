import { Float, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { PropTypes } from "prop-types";

const Cube = (props) => {
  const { nodes } = useGLTF("/models/one_piece_logo.glb");
  return (
    <>
      {!props.isMobile ? (
        <Float floatingRange={[0, 0.01]} dispose={null}>
          <group {...props} rotation={[0, -Math.PI, 0]}>
            <group position={[-4, -0.051, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve_0.geometry}
                material={new MeshStandardMaterial({ color: 0x000000 })}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve_1.geometry}
                material={new MeshStandardMaterial({ color: 0xff6d64 })}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve_2.geometry}
                material={new MeshStandardMaterial({ color: 0xffff6d })}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve_3.geometry}
                // material={materials["Material.002"]}
              />
            </group>
          </group>
        </Float>
      ) : null}
    </>
  );
};

useGLTF.preload("/models/one_piece_logo.glb");

Cube.propTypes = {
  isMobile: PropTypes.bool,
};

export default Cube;
