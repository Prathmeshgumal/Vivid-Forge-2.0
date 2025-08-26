import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Send,
  Crown,
  ArrowLeft,
  Video,
  Mic,
  Share2,
  MessageCircle,
  MousePointer,
  Eye,
  Zap,
  Settings,
  MoreVertical
} from "lucide-react";
import TopNavigation from "@/components/TopNavigation";
import DesignCanvas from "@/components/DesignCanvas";
import AIPromptBar from "@/components/AIPromptBar";

const Collaboration = () => {
  const navigate = useNavigate();
  const [chatMessage, setChatMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(true);

  const collaborators = [
    { id: 1, name: "Alex Chen", avatar: "AC", color: "from-primary to-secondary", status: "designing" },
    { id: 2, name: "Sarah Kim", avatar: "SK", color: "from-secondary to-accent", status: "commenting" },
    { id: 3, name: "Mike Johnson", avatar: "MJ", color: "from-accent to-primary", status: "viewing" },
    { id: 4, name: "Emma Davis", avatar: "ED", color: "from-primary to-accent", status: "editing" },
  ];

  const messages = [
    { id: 1, user: "Alex Chen", message: "What do you think about adding more contrast to the hero section?", time: "2:34 PM", avatar: "AC" },
    { id: 2, user: "Sarah Kim", message: "Love the new gradient! Could we try a slightly different blue?", time: "2:36 PM", avatar: "SK" },
    { id: 3, user: "Mike Johnson", message: "The AI-generated icons look perfect 🎨", time: "2:38 PM", avatar: "MJ" },
  ];

  const suggestions = [
    { id: 1, user: "AI Assistant", suggestion: "Try adding a subtle animation to the CTA button", type: "animation" },
    { id: 2, user: "AI Assistant", suggestion: "Consider using a warmer accent color for better accessibility", type: "color" },
    { id: 3, user: "AI Assistant", suggestion: "The layout could benefit from more whitespace in the header", type: "spacing" },
  ];

  const sendMessage = () => {
    if (!chatMessage.trim()) return;
    // Add message logic here
    setChatMessage("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Enhanced Navigation with Collaboration Features */}
      <header className="h-16 bg-gradient-surface border-b border-border/50 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" onClick={() => navigate('/workspace')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Workspace
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Crown className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DesignForge
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Team Project</span>
          </div>
        </div>

        {/* Live Collaboration Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="glass" size="sm">
              <Video className="h-4 w-4 mr-2" />
              Call
            </Button>
            <Button variant="glass" size="sm">
              <Mic className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Active Collaborators */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {collaborators.slice(0, 3).map((user) => (
                <div key={user.id} className="relative">
                  <Avatar className="w-8 h-8 border-2 border-background">
                    <AvatarFallback className={`bg-gradient-to-r ${user.color} text-white text-xs`}>
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background animate-glow-pulse" />
                </div>
              ))}
              {collaborators.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">+{collaborators.length - 3}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Collaboration Workspace */}
      <div className="flex-1 flex">
        {/* Design Canvas with Live Cursors */}
        <div className="flex-1 relative">
          <DesignCanvas />
          
          {/* Live Cursors */}
          {collaborators.slice(0, 2).map((user, index) => (
            <div 
              key={user.id}
              className="absolute pointer-events-none z-50 transition-all duration-300"
              style={{ 
                left: `${30 + index * 15}%`, 
                top: `${40 + index * 10}%`,
              }}
            >
              <div className="flex items-center gap-2">
                <MousePointer className={`h-5 w-5 text-primary transform rotate-12`} />
                <div className={`px-2 py-1 rounded-md bg-gradient-to-r ${user.color} text-white text-xs font-medium shadow-lg`}>
                  {user.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Sidebar */}
        <div className="w-80 bg-gradient-surface border-l border-border/50 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Team Collaboration</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(!isChatOpen)}>
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>

            {/* Active Users */}
            <div className="space-y-2">
              {collaborators.map((user) => (
                <div key={user.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={`bg-gradient-to-r ${user.color} text-white text-xs`}>
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                      <span className="text-xs text-muted-foreground capitalize">{user.status}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          {isChatOpen && (
            <div className="flex-1 flex flex-col">
              <div className="p-4 border-b border-border/50">
                <h4 className="font-medium mb-3">Team Chat</h4>
                <ScrollArea className="h-48">
                  <div className="space-y-3">
                    {messages.map((msg) => (
                      <div key={msg.id} className="flex gap-3">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="bg-gradient-primary text-white text-xs">
                            {msg.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium">{msg.user}</span>
                            <span className="text-xs text-muted-foreground">{msg.time}</span>
                          </div>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                {/* Chat Input */}
                <div className="flex gap-2 mt-3">
                  <Input
                    placeholder="Type a message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1 bg-muted/50 border-border/50"
                  />
                  <Button variant="default" size="sm" onClick={sendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="p-4">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  AI Suggestions
                </h4>
                <div className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <Card key={suggestion.id} className="p-3 bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 animate-glow-pulse" />
                        <div className="flex-1">
                          <p className="text-sm">{suggestion.suggestion}</p>
                          <span className="text-xs text-muted-foreground capitalize">{suggestion.type}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Prompt Bar */}
      <AIPromptBar />
    </div>
  );
};

export default Collaboration;