import ModelViewer from "@/components/model-viewer";
import {
  cranialNerveNucleiButtonPositions,
  cranialNerveNucleiCameraOffsets,
} from "@/constants/brain-regions";

export default function NerveCrossSectionPage() {
  return (
    <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
      <ModelViewer
        scale={1}
        modelPath="cranial_nerve_nuclei"
        buttons={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        cameraOffsets={cranialNerveNucleiCameraOffsets}
        buttonPositions={cranialNerveNucleiButtonPositions}
      />
    </div>
  );
}
