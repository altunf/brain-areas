import { Html, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useBrainRegion } from "@/context/brain-region-context";
import gsap from "gsap";
import { useMemo } from "react";
import { ButtonStyle, Language, ModelLoaderProps } from "@/types/types";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  buttonPositions,
  cameraOffsets,
  regionDescriptions,
} from "@/constants/brain-regions";

export default function ModelLoader({
  path,
  scale,
  position,
  onClick,
}: ModelLoaderProps) {
  const { language, setLanguage, setSelectedRegion } = useBrainRegion();
  const { scene } = useGLTF(path);
  const { camera } = useThree();

  const handleButtonClick = (position: number[], num: number) => {
    const offset = cameraOffsets[num as keyof typeof cameraOffsets];
    gsap.to(camera.position, {
      x: position[0] + offset.x,
      y: position[1] + offset.y,
      z: position[2] + offset.z,
      duration: 1,
      ease: "power2.inOut",
    });

    // Map button numbers to brain region names
    const regionNames: { [key: number]: string } = {
      1: "Amygdala",
      2: "Hippocampus",
      3: "Anterior Cingulate Cortex",
      4: "Hypothalamus",
      5: "Pituitary Glad",
    };

    setSelectedRegion(regionNames[num] || "");
  };

  const renderButton = (num: number) => (
    <Html
      key={num}
      position={buttonPositions[num as keyof typeof buttonPositions] as any}
    >
      <Popover>
        <PopoverTrigger asChild>
          <button
            onClick={() => {
              console.log(`Button ${num} clicked`);
              handleButtonClick(
                buttonPositions[num as keyof typeof buttonPositions],
                num
              );
            }}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {num}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="p-4">
            <div className="flex justify-end mb-2">
              <button
                onClick={() =>
                  setLanguage((lang: Language) => (lang === "tr" ? "en" : "tr"))
                }
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {language === "tr" ? "EN" : "TR"}
              </button>
            </div>
            <h2 className="text-lg font-bold mb-2">
              {
                regionDescriptions[num as keyof typeof regionDescriptions][
                  language
                ].name
              }
            </h2>
            <p className="text-sm text-gray-600">
              {
                regionDescriptions[num as keyof typeof regionDescriptions][
                  language
                ].description
              }
            </p>
          </div>
        </PopoverContent>
      </Popover>
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

const buttonStyle: ButtonStyle & { transition?: string; ":hover"?: any } = {
  padding: "4px 12px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  color: "white",
  border: "2px solid white",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "scale(1.1)",
  },
};
