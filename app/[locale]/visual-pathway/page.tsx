import BottomBar from "@/components/bottom-bar";
import ModelViewer from "@/components/model-viewer";
import {
  visualPathwayButtonPositions,
  visualPathwayCameraOffsets,
} from "@/constants/brain-regions";

export default function VisualPathwayPage() {
  return (
    <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
      <ModelViewer
        scale={0.3}
        modelPath="visual_pathway"
        buttons={[1, 2, 3, 4, 5, 6, 7, 8]}
        cameraOffsets={visualPathwayCameraOffsets}
        buttonPositions={visualPathwayButtonPositions}
      />
      <BottomBar />
    </div>
  );
}
