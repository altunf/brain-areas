import ModelViewer from "@/components/model-viewer";
import BottomBar from "@/components/bottom-bar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#CEEFFD] relative">
      <ModelViewer />
      <BottomBar />
    </div>
  );
}
