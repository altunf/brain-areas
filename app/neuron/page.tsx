import ModelViewer from "@/components/model-viewer";
import BottomBar from "@/components/bottom-bar";
import {
  neuronButtonPositions,
  neuronCameraOffsets,
} from "@/constants/brain-regions";

export default function NeuronPage() {
  return (
    <div className="w-screen h-screen bg-[#CEEFFD] relative">
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
