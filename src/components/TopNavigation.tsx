import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  FileText, 
  Save, 
  Share2, 
  Users, 
  Settings, 
  Menu,
  Crown,
  Download
} from "lucide-react";

const TopNavigation = () => {
  return (
    <header className="h-16 bg-gradient-surface border-b border-border/50 flex items-center justify-between px-6">
      {/* Left Section - Logo & Project */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Crown className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            DesignForge
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Untitled Project</span>
        </div>
      </div>

      {/* Center Section - Main Actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="glass" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button variant="secondary" size="sm">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>

      {/* Right Section - Collaboration & User */}
      <div className="flex items-center gap-4">
        {/* Collaboration Avatars */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-avatar-1.jpg" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs">JD</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-background">
              <AvatarImage src="/placeholder-avatar-2.jpg" />
              <AvatarFallback className="bg-gradient-to-r from-secondary to-accent text-white text-xs">AS</AvatarFallback>
            </Avatar>
            <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
              <span className="text-xs text-muted-foreground">+2</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Invite
          </Button>
        </div>

        <div className="w-px h-6 bg-border" />

        {/* User Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-gradient-accent text-accent-foreground">YU</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default TopNavigation;