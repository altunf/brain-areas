import ModelViewer from "@/components/model-viewer";
import BottomBar from "@/components/bottom-bar";
import {
  limbicSystemButtonPositions,
  limbicSystemCameraOffsets,
} from "@/constants/brain-regions";

export default function NerveCrossSectionPage() {
  return (
    <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
      <ModelViewer
      scale={0.5}
        modelPath="nerve_cross_section"
        buttons={[1, 2, 3, 4, 5]}
        cameraOffsets={limbicSystemCameraOffsets}
        buttonPositions={limbicSystemButtonPositions}
      />
      <BottomBar />
    </div>
  );
}
