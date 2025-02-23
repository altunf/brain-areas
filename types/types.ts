export interface ModelLoaderProps {
    path: string;
    scale: number;
    position: [number, number, number];
    onClick?: (event: any) => void;
    buttonPosition?: [number, number, number] | null;
  }
  
 export interface ButtonStyle {
    padding: string;
    backgroundColor: string;
    color: string;
    border: string;
    borderRadius: string;
    cursor: string;
  }

  export type Language = "tr" | "en";

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
  