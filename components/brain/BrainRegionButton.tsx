import { Html } from "@react-three/drei";
import { BrainRegionButtonProps, ButtonStyle } from "@/types/types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { limbicSystemRegionDesc } from "@/constants/brain-regions";

export function BrainRegionButton({
  buttonPositions,
  num,
  language,
  setLanguage,
  onButtonClick,
}: BrainRegionButtonProps) {
  return (
    <Html
      key={num}
      position={buttonPositions[num]}
    >
      <Popover>
        <PopoverTrigger asChild>
          <button
            onClick={() => {
              console.log(`Button ${num} clicked`);
              onButtonClick(
                [...buttonPositions[num]],
                num
              );
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
            <div className="flex justify-end mb-2">
              <button
                onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                {language === "tr" ? "EN" : "TR"}
              </button>
            </div>
            <h2 className="text-lg font-bold mb-2">
              {limbicSystemRegionDesc[num as keyof typeof limbicSystemRegionDesc]?.[
                language
              ]?.name || `Region ${num}`}
            </h2>
            <p className="text-sm text-gray-600">
              {limbicSystemRegionDesc[num as keyof typeof limbicSystemRegionDesc]?.[
                language
              ]?.description || "Description not available"}
            </p>
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
