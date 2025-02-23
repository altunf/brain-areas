export interface ModelLoaderProps {
  buttonPositions: [number, number, number][];
  cameraOffsets: [number, number, number];
  path: string;
  scale: number;
  buttons: number[];
  position: [number, number, number];
  onClick?: (event: any) => void;
  buttonPosition?: [number, number, number] | null;
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

export type BrainRegionContextType = {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  getTranslation: (key: string) => string;
};

export interface BrainRegionButtonProps {
  buttonPositions: [number, number, number][];
  num: number;
  language: Language;
  setLanguage: (lang: Language) => void;
  onButtonClick: (position: number[], num: number) => void;
}
