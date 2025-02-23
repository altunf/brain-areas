"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelLoader from "./model-loader";

export default function ModelViewer({
  scale,
  buttonPositions,
  cameraOffsets,
  modelPath,
  buttons,
}: {
  scale: number;
  buttonPositions: any; // add type annotation here
  cameraOffsets: any; // add type annotation here
  modelPath: string;
  buttons: number[];
}) {
  return (
    <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
      <ambientLight intensity={2} color="#ffffff" />
      <directionalLight color="#ffffff" position={[6, 5, 1]} intensity={8} />
      <ModelLoader
        buttonPositions={buttonPositions}
        cameraOffsets={cameraOffsets}
        buttons={buttons}
        path={modelPath}
        scale={scale}
        position={[0, 0, 0]}

        onClick={(event) => {
          console.log({
            meshName: event.object.name,
            clickPoint: event.point,
          });
        }}
      />
      <OrbitControls />
    </Canvas>
  );
}
