import ModelViewer from "@/components/model-viewer";
import BottomBar from "@/components/bottom-bar";
import {
  neuronButtonPositions,
  neuronCameraOffsets,
} from "@/constants/brain-regions";

export default function NeuronPage() {
  return (
    <div className=" bg-[#CEEFFD] flex flex-1 flex-col gap-4 h-screen">
      <ModelViewer
        scale={3}
        modelPath="neuron"
        buttons={[1, 2, 3, 4, 5, 6, 7, 8]}
        cameraOffsets={neuronCameraOffsets}
        buttonPositions={neuronButtonPositions}
      />
      <BottomBar />
    </div>
  );
}
