import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";
import { any } from "prop-types";

const programmingTerms = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Three.js",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Next.js",
  "CI/CD",
  "WebGL",
  "LiveKit",
  "OAuth",
  "TensorFlow",
  "TailwindCSS",
  "Jest",
  "Firebase",
  "Azure",
  "Jenkins",
  "MicroServices",
  "MQTT",
  "Yjs",
  "Livekit",
  "Jitsi",
];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 1,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(() => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Billboard {...props}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
        //eslint-disable-next-line
        children={children}
      />
    </Billboard>
  );
}

function getRandomTerm() {
  return programmingTerms[Math.floor(Math.random() * programmingTerms.length)];
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          getRandomTerm(),
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    //eslint-disable-next-line
    <Word key={index} position={pos} children={word} />
  ));
}

export default function FloatingWords({ position }) {
  const groupRef = useRef();
  const rotationRef = useRef({ x: 0, y: 0 });

  // Handle mouse drag to update rotationRef
  const sensitivity = 0.0005; // Adjust sensitivity as needed
  const bind = useDrag(({ movement: [mx, my] }) => {
    rotationRef.current.x = my * sensitivity; // Invert Y-axis
    rotationRef.current.y = mx * sensitivity; // Invert X-axis
  });

  // Apply rotation in the render loop (only update when mouse moves)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += rotationRef.current.x;
      groupRef.current.rotation.y += rotationRef.current.y;
      rotationRef.current.x *= 0.95; // Damping effect
      rotationRef.current.y *= 0.95; // Damping effect
    }
  });

  return (
    <group
      ref={groupRef}
      {...bind()}
      rotation={[0, 0, 0]}
      scale={0.8}
      position={position}
    >
      <Cloud count={8} radius={20} />
    </group>
  );
}

FloatingWords.propTypes = {
  position: any,
};

Word.propTypes = {
  children: any,
};
