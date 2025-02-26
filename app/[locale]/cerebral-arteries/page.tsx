import ModelViewer from "@/components/model-viewer";
import { visualPathwayButtonPositions, visualPathwayCameraOffsets } from "@/constants/brain-regions";

export default function CerebralArteriesPage() {
    return (
      <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
        <ModelViewer
          scale={0.0001}
          modelPath="cerebral_arteries"
          buttons={[]}
          cameraOffsets={visualPathwayCameraOffsets}
          buttonPositions={visualPathwayButtonPositions}
        />
      </div>
    );
  }