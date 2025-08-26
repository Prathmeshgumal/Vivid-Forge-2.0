import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Move, Square, Circle, Type, Image, Layers } from "lucide-react";

const DesignCanvas = () => {
  const [selectedTool, setSelectedTool] = useState("select");

  const tools = [
    { id: "select", icon: Move, label: "Select" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "text", icon: Type, label: "Text" },
    { id: "image", icon: Image, label: "Image" },
    { id: "layers", icon: Layers, label: "Layers" },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gradient-surface relative overflow-hidden">
      {/* Floating Toolbar */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <Card className="bg-muted/80 backdrop-blur-glass border-border/50 shadow-hover-lift">
          <div className="flex items-center gap-2 p-2">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={selectedTool === tool.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedTool(tool.id)}
                className="h-9 w-9 p-0"
              >
                <tool.icon className="h-4 w-4" />
              </Button>
            ))}
            <div className="w-px h-6 bg-border mx-1" />
            <Button variant="accent" size="sm" className="gap-2">
              <Zap className="h-4 w-4" />
              AI Generate
            </Button>
          </div>
        </Card>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div 
          className="w-full max-w-4xl aspect-[4/3] bg-background border-2 border-dashed border-border/30 rounded-lg flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: 'hsl(var(--canvas-bg))' }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center animate-glow-pulse">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Start Creating</h3>
            <p className="text-muted-foreground max-w-sm">
              Select a tool or use AI to generate creative elements for your design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignCanvas;