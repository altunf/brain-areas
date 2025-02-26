"use client";
import { BrainRegionContextType } from "@/types/types";
import { createContext, useContext, useState, ReactNode } from "react";
import { useTranslations, useLocale } from 'next-intl';

const BrainRegionContext = createContext<BrainRegionContextType | undefined>(undefined);

export type ModelType = 'limbicSystem' | 'neuron' | 'cerebralArteries';

export function BrainRegionProvider({ children }: { children: ReactNode }) {
  const [selectedRegion, setSelectedRegion] = useState<string>("selectAnnotation");
  const [modelType, setModelType] = useState<ModelType>("limbicSystem");
  const t = useTranslations(modelType);
  const locale = useLocale();

  const getTranslation = (key: string) => {
    return t(key);
  };

  const changeModel = (newModel: ModelType) => {
    setModelType(newModel);
    setSelectedRegion("selectAnnotation"); // Reset selection when model changes
  };

  return (
    <BrainRegionContext.Provider 
      value={{ 
        selectedRegion, 
        setSelectedRegion,
        modelType,
        changeModel, 
        language: locale,
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
