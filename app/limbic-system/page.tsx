import ModelViewer from "@/components/model-viewer";
import BottomBar from "@/components/bottom-bar";
import {
  limbicSystemButtonPositions,
  limbicSystemCameraOffsets,
} from "@/constants/brain-regions";

export default function LimbicSystemPage() {
  return (
    <div className="w-screen h-screen bg-[#CEEFFD] relative">
      <ModelViewer
      scale={0.5}
        modelPath="limbic_system"
        buttons={[1, 2, 3, 4, 5]}
        cameraOffsets={limbicSystemCameraOffsets}
        buttonPositions={limbicSystemButtonPositions}
      />
      <BottomBar />
    </div>
  );
}
