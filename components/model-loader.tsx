import { Html, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useMemo } from "react";

interface ModelLoaderProps {
  path: string;
  scale: number;
  position: [number, number, number];
  onClick?: (event: any) => void;
  buttonPosition?: [number, number, number] | null;
}

interface ButtonStyle {
  padding: string;
  backgroundColor: string;
  color: string;
  border: string;
  borderRadius: string;
  cursor: string;
}

export default function ModelLoader({
  path,
  scale,
  position,
  onClick,
}: ModelLoaderProps) {
  const { scene } = useGLTF(path);
  const { camera } = useThree();
  const buttonPositions = useMemo(
    () => ({
      1: [0.04, 0.16, 0.5],
      2: [0.54, 0.1, 0.4],
      3: [0.37, 0.4, 0.61],
      4: [0.25, 0.21, 0.53],
      5: [0.2541528003589063, 0.05097716176770178, 0.5330323053032349],
    }),
    []
  );
  const cameraOffsets = useMemo(
    () => ({
      1: { x: 0, y: -0.1, z: 0.6 },
      2: { x: 0.5, y: -0.4, z: 0.6 },
      3: { x: 0.6, y: 0.6, z: 0.6 },
      4: { x: 0, y: 0, z: 0.6 },
      5: { x: -0.05, y: -0.2, z: 0.6 },
    }),
    []
  );
  const buttonStyle: ButtonStyle & { transition?: string, ':hover'?: any } = {
    padding: "8px 16px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    color: "white",
    border: "2px solid white",
    cursor: "pointer",
    transition: "all 0.3s ease",
    ':hover': {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transform: "scale(1.1)",
    }
  };
  const renderButton = (num: number) => (
    <Html
      key={num}
      position={buttonPositions[num as keyof typeof buttonPositions]}
    >
      <button
        onClick={() => {
          console.log(`Button ${num} clicked`);
          handleButtonClick(buttonPositions[num], num);
        }}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {num}
      </button>
    </Html>
  );
  return (
    <group>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        onClick={(event: any) => {
          event.stopPropagation();
          onClick?.(event);
        }}
      />
      {[1, 2, 3, 4, 5].map(renderButton)}
    </group>
  );
}
