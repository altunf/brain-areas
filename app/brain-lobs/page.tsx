import ModelViewer from "@/components/model-viewer";
import {
  brainLobsButtonPositions,
  brainLobsCameraOffsets,
} from "@/constants/brain-regions";
import React from "react";

export default function BrainLobsPage() {
  return (
    <div className="w-screen h-screen bg-[#CEEFFD] relative">
      <ModelViewer
        scale={0.0001}
        modelPath="brain_lobs"
        buttons={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        cameraOffsets={brainLobsCameraOffsets}
        buttonPositions={brainLobsButtonPositions}
      />
    </div>
  );
}
