import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useBrainRegion } from "@/context/brain-region-context";
import gsap from "gsap";
import { ModelLoaderProps } from "@/types/types";
import { BrainRegionButton } from "./brain/BrainRegionButton";
import { Suspense } from "react";
import { MODEL_REGIONS } from "@/constants/model-regions";

export default function ModelLoader({
  buttonPositions,
  cameraOffsets,
  buttons,
  path,
  scale,
  position,
}: ModelLoaderProps) {
  const { setSelectedRegion } = useBrainRegion();
  const { scene } = useGLTF(`/models/${path}.glb`, true);
  const { camera } = useThree();

  const getModelTypeFromPath = (path: string) => {
    switch (path) {
      case "brain_lobs":
        return "brainLobs";
      case "limbic_system":
        return "limbicSystem";
      case "neuron":
        return "neuron";
      case "visual_pathway":
        return "visualPathway";
      case "cerebral_arteries":
        return "cerebralArteries";
      case "ventricular_system":
        return "ventricularSystem";
        case "brodmann_conceptual_model":
          return "brodmannAreasAndPathologies";
          case "nerve_cross_section":
            return "nerveCrossSection";
      default:
        return "limbicSystem";
    }
  };

  const currentModelType = getModelTypeFromPath(path);

  const handleButtonClick = (position: number[], num: number) => {
    const offset: any = cameraOffsets[num];
    gsap.to(camera.position, {
      x: position[0] + offset.x,
      y: position[1] + offset.y,
      z: position[2] + offset.z,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        camera.updateProjectionMatrix();
      },
    });

    const regionNames =
      MODEL_REGIONS[currentModelType as keyof typeof MODEL_REGIONS];
    setSelectedRegion(regionNames[num as keyof typeof regionNames] || "");
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <group>
        <primitive
          rotation={path === "brain_lobs" ? [0, Math.PI / 2, 0] : [0, 0, 0]}
          object={scene}
          scale={scale}
          position={position}
/*           onClick={(event:any) => {
            event.stopPropagation();
            const point = event.point;
            console.log(`Click position: [${point.x.toFixed(3)}, ${point.y.toFixed(3)}, ${point.z.toFixed(3)}]`);
          }} */
        />
        {buttons?.map((num) => (
          <BrainRegionButton
            key={num}
            num={num}
            buttonPositions={buttonPositions}
            onButtonClick={handleButtonClick}
            modelType={currentModelType}
          />
        ))}
      </group>
    </Suspense>
  );
}
