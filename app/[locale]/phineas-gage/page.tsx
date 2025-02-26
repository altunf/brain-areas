import ModelViewer from "@/components/model-viewer";
import BottomBar from "@/components/bottom-bar";
import {
  limbicSystemButtonPositions,
  limbicSystemCameraOffsets,
} from "@/constants/brain-regions";

export default function SkullOfPhineasGagePage() {
  return (
    <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
      <ModelViewer
      scale={0.009}
        modelPath="skull_of_phineas_gage"
        buttons={[]}
        cameraOffsets={limbicSystemCameraOffsets}
        buttonPositions={limbicSystemButtonPositions}
      />
      <BottomBar />
    </div>
  );
}