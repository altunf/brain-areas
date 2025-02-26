"use client"
import { useBrainRegion } from "@/context/brain-region-context";

export default function BottomBar() {
  const { selectedRegion, getTranslation } = useBrainRegion();
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 bg-white p-4 flex gap-4 shadow-lg rounded-lg max-w-md items-center">
      <div className="flex items-center text-gray-700 font-medium text-lg">
        {getTranslation(selectedRegion)}
      </div>
    </div>
  );
}