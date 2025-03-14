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
      <ambientLight color={"white"} intensity={1} />
      <directionalLight color={"white"} position={[1, 5, 1]} intensity={8} />
      
      <ModelLoader
        buttonPositions={buttonPositions}
        cameraOffsets={cameraOffsets}
        buttons={buttons}
        path={modelPath}
        scale={scale}
        position={[0, 0, 0]}
      />
     {  modelPath == "skull_of_phineas_gage" &&  <directionalLight color={"white"} position={[1, -0.3, -0.4]} intensity={8} /> }
      <OrbitControls />
    </Canvas>
  );
}
