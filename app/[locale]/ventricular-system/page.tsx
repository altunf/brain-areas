
import ModelViewer from "@/components/model-viewer";
import { visualPathwayButtonPositions, visualPathwayCameraOffsets } from "@/constants/brain-regions";

export default function VentricularSystemPage() {
    return (
      <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
        <ModelViewer
          scale={0.015}
          modelPath="ventricular_system"
          buttons={[1, 2, 3, 4, 5, 6, 7, 8]}
          cameraOffsets={visualPathwayCameraOffsets}
          buttonPositions={visualPathwayButtonPositions}
        />
      </div>
    );
  }