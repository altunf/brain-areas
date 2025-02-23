import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useBrainRegion } from "@/context/brain-region-context";
import gsap from "gsap";
import { ModelLoaderProps } from "@/types/types";
import { BrainRegionButton } from "./brain/BrainRegionButton";

export default function ModelLoader({
  buttonPositions,
  cameraOffsets,
  buttons,
  path,
  scale,
  position,
  onClick,
}: ModelLoaderProps) {
  const { language, setLanguage, setSelectedRegion } = useBrainRegion();
  const { scene } = useGLTF(`/models/${path}.glb`);
  const { camera } = useThree();

  const handleButtonClick = (position: number[], num: number) => {
    const offset: any = cameraOffsets[num]; // add type annotation here
    gsap.to(camera.position, {
      x: position[0] + offset.x,
      y: position[1] + offset.y,
      z: position[2] + offset.z,
      duration: 1,
      ease: "power2.inOut",
    });

    const regionNames: { [key: number]: string } = {
      1: "Amygdala",
      2: "Hippocampus",
      3: "Anterior Cingulate Cortex",
      4: "Hypothalamus",
      5: "Pituitary Glad",
    };

    setSelectedRegion(regionNames[num] || "");
  };

  return (
    <group>
      <primitive
        rotation={path === "brain_lobs" ? [0, Math.PI / 2, 0] : [0, 0, 0]}
        object={scene}
        scale={scale}
        position={position}
        onClick={(event: any) => {
          event.stopPropagation();
          onClick?.(event);
        }}
      />
      {buttons?.map((num) => (
        <BrainRegionButton
          key={num}
          num={num}
          language={language}
          setLanguage={setLanguage}
          buttonPositions={buttonPositions}
          onButtonClick={handleButtonClick}
        />
      ))}
    </group>
  );
}
