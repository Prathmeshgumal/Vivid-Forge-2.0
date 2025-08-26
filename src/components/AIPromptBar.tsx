import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Send, 
  Sparkles, 
  Wand2, 
  Image, 
  Type,
  Palette,
  Shapes
} from "lucide-react";

const AIPromptBar = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setPrompt("");
    }, 2000);
  };

  const suggestions = [
    { icon: Image, text: "Create a modern logo", category: "Design" },
    { icon: Palette, text: "Generate color palette", category: "Colors" },
    { icon: Type, text: "Design typography", category: "Text" },
    { icon: Shapes, text: "Abstract geometric pattern", category: "Shapes" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6 z-50">
      <Card className="bg-muted/80 backdrop-blur-glass border-border/50 shadow-hover-lift">
        <div className="p-4">
          {/* Main Prompt Input */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
              </div>
              <Input
                placeholder="Describe what you want to create with AI..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                className="pl-12 pr-4 h-12 bg-background/50 border-border/50 text-base"
              />
            </div>
            <Button 
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              variant="default"
              size="lg"
              className="h-12 px-6"
            >
              {isGenerating ? (
                <Wand2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Quick Suggestions */}
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setPrompt(suggestion.text)}
                className="h-8 px-3 text-xs bg-background/30 hover:bg-background/50 border border-border/30"
              >
                <suggestion.icon className="h-3 w-3 mr-2" />
                {suggestion.text}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIPromptBar;