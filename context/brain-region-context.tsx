"use client";
import { BrainRegionContextType, Language, Translations } from "@/types/types";
import { createContext, useContext, useState, ReactNode } from "react";


const translations: Translations = {
  "Select an annotation": {
    tr: "Bir bölge seçin",
    en: "Select an annotation"
  },
  "Amygdala": {
    tr: "Amigdala",
    en: "Amygdala"
  },
  "Hippocampus": {
    tr: "Hipokampüs",
    en: "Hippocampus"
  },
  "Anterior Cingulate Cortex": {
    tr: "Anterior Singulat Korteks",
    en: "Anterior Cingulate Cortex"
  },
  "Hypothalamus": {
    tr: "Hipotalamus",
    en: "Hypothalamus"
  },
  "Pituitary Glad": {
    tr: "Hipofiz Bezi",
    en: "Pituitary Glad"
  }
};


const BrainRegionContext = createContext<BrainRegionContextType | undefined>(undefined);

export function BrainRegionProvider({ children }: { children: ReactNode }) {
  const [selectedRegion, setSelectedRegion] = useState<string>("Select an annotation");
  const [language, setLanguage] = useState<Language>("en");

  const getTranslation = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <BrainRegionContext.Provider 
      value={{ 
        selectedRegion, 
        setSelectedRegion, 
        language, 
        setLanguage,
        getTranslation 
      }}
    >
      {children}
    </BrainRegionContext.Provider>
  );
}

export function useBrainRegion() {
  const context = useContext(BrainRegionContext);
  if (context === undefined) {
    throw new Error("useBrainRegion must be used within a BrainRegionProvider");
  }
  return context;
}
