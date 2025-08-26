import TopNavigation from "@/components/TopNavigation";
import DesignCanvas from "@/components/DesignCanvas";
import AssetLibrary from "@/components/AssetLibrary";
import AIPromptBar from "@/components/AIPromptBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Navigation */}
      <TopNavigation />
      
      {/* Main Workspace */}
      <div className="flex-1 flex">
        {/* Design Canvas */}
        <DesignCanvas />
        
        {/* Asset Library Sidebar */}
        <AssetLibrary />
      </div>
      
      {/* AI Prompt Bar */}
      <AIPromptBar />
    </div>
  );
};

export default Index;