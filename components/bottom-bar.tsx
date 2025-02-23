"use client"
import { useBrainRegion } from "@/context/brain-region-context";

export default function BottomBar() {
  const { selectedRegion, language, setLanguage, getTranslation } = useBrainRegion();
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 bg-white p-4 flex gap-4 shadow-lg rounded-lg max-w-md items-center">
      <div className="flex items-center text-gray-700 font-medium text-lg">
        {getTranslation(selectedRegion)}
      </div>
      <div className="flex gap-2 ml-4">
        <button 
          onClick={() => setLanguage("tr")}
          className={`px-2 py-1 rounded ${language === "tr" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          TR
        </button>
        <button 
          onClick={() => setLanguage("en")}
          className={`px-2 py-1 rounded ${language === "en" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          EN
        </button>
      </div>
    </div>
  );
}