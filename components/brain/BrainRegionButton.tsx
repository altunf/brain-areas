"use client";

import { Html } from "@react-three/drei";
import { BrainRegionButtonProps, ButtonStyle } from "@/types/types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useTranslations } from "next-intl";
import React from "react";

export function BrainRegionButton({
  buttonPositions,
  num,
  onButtonClick,
  modelType,
}: BrainRegionButtonProps) {
  const t = useTranslations();

  const getRegionInfo = () => {
    try {
      const regionKey = `${modelType}RegionDesc.${num}`;
    
      return {
        name: t(regionKey + ".name"),
        description: t(regionKey + ".description"),
      };
    } catch (error) {
    
      return {
        name: `Region ${num}`,
        description: "Description not available",
      };
    }
  };

  const { name, description } = getRegionInfo();

  return (
    <Html key={num} position={buttonPositions[num]}>
      <Popover>
        <PopoverTrigger asChild>
          <button
            onClick={() => {
              onButtonClick([...buttonPositions[num]], num);
            }}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {num}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </PopoverContent>
      </Popover>
    </Html>
  );
}

const buttonStyle: ButtonStyle & { transition?: string; ":hover"?: any } = {
  display: "flex",
  padding: "8px",
  justifyContent: "center",
  alignItems: "center",
  weight: "24px",
  height: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  color: "white",
  border: "2px solid white",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transform: "scale(1.1)",
  },
};
