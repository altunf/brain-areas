import ModelViewer from "@/components/model-viewer";
import {
  limbicSystemButtonPositions,
  limbicSystemCameraOffsets,
} from "@/constants/brain-regions";

export default function BroadmannAreasPage() {
  return (
    <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
      <ModelViewer
      scale={0.5}
        modelPath="brodmann_conceptual_model"
        buttons={[1, 2, 3, 4, 5]}
        cameraOffsets={limbicSystemCameraOffsets}
        buttonPositions={limbicSystemButtonPositions}
      />
  
    </div>
  );
}
