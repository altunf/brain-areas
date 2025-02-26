import { ThreeEvent } from "@react-three/fiber";

export interface ModelLoaderProps {
  buttonPositions: any;
  cameraOffsets: any;
  buttons: number[];
  path: string;
  scale: number;
  position: [number, number, number];
//  onClick?: (event: ThreeEvent<MouseEvent>) => void;
}

export interface ButtonStyle {
  weight: string;
  height: string;
  justifyContent: string;
  alignItems: string;
  display:string;
  padding: string;
  backgroundColor: string;
  color: string;
  border: string;
  borderRadius: string;
  cursor: string;
}

export type Language = "tr" | "en";
export type Button = {};

export type Translations = {
  [key: string]: {
    tr: string;
    en: string;
  };
};

export type ModelType = 'limbicSystem' | 'neuron' | 'cerebralArteries';

export type BrainRegionContextType = {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  language: string;
  getTranslation: (key: string) => string;
};

export interface BrainRegionButtonProps {
  buttonPositions: Record<number, [number, number, number]>;
  num: number;
  onButtonClick: (position: number[], num: number) => void;
  modelType: string;
}
