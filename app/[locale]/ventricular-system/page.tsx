
import ModelViewer from "@/components/model-viewer";
import { ventricularSystemButtonPositions, ventricularSystemCameraOffsets } from "@/constants/brain-regions";

export default function VentricularSystemPage() {
    return (
      <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
        <ModelViewer
          scale={15}
          modelPath="ventricular_system"
          buttons={[1, 2, 3, 4, 5, 6, 7, 8]}
          cameraOffsets={ventricularSystemCameraOffsets}
          buttonPositions={ventricularSystemButtonPositions}
        />
      </div>
    );
  }