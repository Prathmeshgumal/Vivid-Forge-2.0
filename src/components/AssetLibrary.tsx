import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Image, 
  Shapes, 
  Type, 
  Palette, 
  Star,
  Download,
  Heart,
  ChevronDown
} from "lucide-react";

const AssetLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockAssets = [
    { id: 1, type: "image", title: "Abstract Shapes", category: "Graphics" },
    { id: 2, type: "icon", title: "Social Icons", category: "Icons" },
    { id: 3, type: "template", title: "Modern Layout", category: "Templates" },
    { id: 4, type: "color", title: "Gradient Pack", category: "Colors" },
  ];

  return (
    <div className="w-80 bg-gradient-surface border-l border-border flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Assets</h2>
          <Button variant="ghost" size="sm">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-muted/50 border-border/50"
          />
        </div>
      </div>

      {/* Asset Categories */}
      <Tabs defaultValue="all" className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-4 mx-4 mt-4">
          <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
          <TabsTrigger value="images" className="text-xs">Images</TabsTrigger>
          <TabsTrigger value="icons" className="text-xs">Icons</TabsTrigger>
          <TabsTrigger value="shapes" className="text-xs">Shapes</TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1 px-4">
          <TabsContent value="all" className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {mockAssets.map((asset) => (
                <Card 
                  key={asset.id} 
                  className="group cursor-pointer bg-muted/30 hover:bg-muted/60 transition-all duration-300 hover:shadow-glow-primary border-border/30"
                >
                  <div className="aspect-square bg-gradient-primary/20 rounded-t-lg flex items-center justify-center">
                    <Image className="h-8 w-8 text-primary" />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium truncate">{asset.title}</h4>
                    <p className="text-xs text-muted-foreground">{asset.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Heart className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="images" className="mt-4">
            <div className="grid grid-cols-1 gap-3">
              <Card className="bg-muted/30 hover:bg-muted/60 transition-all duration-300 cursor-pointer">
                <div className="aspect-video bg-gradient-accent/20 rounded-t-lg flex items-center justify-center">
                  <Image className="h-12 w-12 text-accent" />
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-medium">Stock Photos</h4>
                  <p className="text-xs text-muted-foreground">High-quality images</p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="icons" className="mt-4">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="aspect-square bg-muted/30 hover:bg-muted/60 transition-all duration-300 cursor-pointer flex items-center justify-center">
                  <Star className="h-6 w-6 text-secondary" />
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shapes" className="mt-4">
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="aspect-square bg-muted/30 hover:bg-muted/60 transition-all duration-300 cursor-pointer flex items-center justify-center">
                  <Shapes className="h-8 w-8 text-accent" />
                </Card>
              ))}
            </div>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default AssetLibrary;