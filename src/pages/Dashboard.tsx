import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import {
  Crown,
  ArrowLeft,
  Plus,
  Zap,
  Users,
  Heart,
  Download,
  TrendingUp,
  Clock,
  Star,
  Folder,
  Image,
  FileText,
  Palette,
  Settings,
  MoreVertical,
  Calendar,
  Trophy
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const stats = [
    {
      title: "Projects Created",
      value: "24",
      change: "+12%",
      icon: Folder,
      gradient: "from-primary to-secondary",
      trend: "up"
    },
    {
      title: "AI Generations",
      value: "156",
      change: "+34%",
      icon: Zap,
      gradient: "from-secondary to-accent",
      trend: "up"
    },
    {
      title: "Collaborations",
      value: "8",
      change: "+5%",
      icon: Users,
      gradient: "from-accent to-primary",
      trend: "up"
    },
    {
      title: "Downloads",
      value: "432",
      change: "+18%",
      icon: Download,
      gradient: "from-primary to-accent",
      trend: "up"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "Brand Identity Redesign",
      type: "Business",
      lastEdited: "2 hours ago",
      thumbnail: "from-primary to-secondary",
      collaborators: 3,
      status: "in-progress"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      type: "Social",
      lastEdited: "1 day ago",
      thumbnail: "from-secondary to-accent",
      collaborators: 2,
      status: "completed"
    },
    {
      id: 3,
      title: "AI Generated Artwork",
      type: "Creative",
      lastEdited: "3 days ago",
      thumbnail: "from-accent to-primary",
      collaborators: 1,
      status: "draft"
    },
    {
      id: 4,
      title: "Presentation Template",
      type: "Business",
      lastEdited: "1 week ago",
      thumbnail: "from-primary/80 to-secondary/80",
      collaborators: 5,
      status: "completed"
    }
  ];

  const achievements = [
    { title: "First AI Generation", icon: Zap, completed: true },
    { title: "Team Collaboration", icon: Users, completed: true },
    { title: "Template Master", icon: Star, completed: false },
    { title: "Creative Genius", icon: Palette, completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="h-16 bg-gradient-surface border-b border-border/50 flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Crown className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="glass" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="default" onClick={() => navigate('/workspace')}>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">
              Welcome back, <span className="bg-gradient-accent bg-clip-text text-transparent">Creator</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's continue building something amazing
            </p>
          </div>
          
          {/* Period Selector */}
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
            {['day', 'week', 'month'].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className="capitalize"
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-gradient-surface border-border/50 hover:shadow-hover-lift transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-sm font-medium ${stat.trend === 'up' ? 'text-accent' : 'text-destructive'}`}>
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-surface border-border/50">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Recent Projects</h3>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div 
                      key={project.id}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
                      onClick={() => navigate('/workspace')}
                    >
                      {/* Project Thumbnail */}
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.thumbnail} flex items-center justify-center shadow-lg`}>
                        <FileText className="h-8 w-8 text-white/80" />
                      </div>
                      
                      {/* Project Info */}
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{project.type}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {project.lastEdited}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {project.collaborators}
                          </span>
                        </div>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' ? 'bg-accent/20 text-accent' :
                        project.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {project.status.replace('-', ' ')}
                      </div>
                      
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Credits */}
            <Card className="bg-gradient-surface border-border/50">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Credits</h3>
                    <p className="text-sm text-muted-foreground">72 remaining</p>
                  </div>
                </div>
                
                <Progress value={72} className="mb-4 h-2" />
                
                <Button variant="accent" size="sm" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Get More Credits
                </Button>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-surface border-border/50">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-accent" />
                  <h3 className="font-semibold">Achievements</h3>
                </div>
                
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        achievement.completed 
                          ? 'bg-gradient-accent shadow-glow-accent' 
                          : 'bg-muted'
                      }`}>
                        <achievement.icon className={`h-4 w-4 ${
                          achievement.completed ? 'text-white' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <span className={`text-sm ${
                        achievement.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-surface border-border/50">
              <div className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="glass" size="sm" className="w-full justify-start" onClick={() => navigate('/workspace')}>
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                  <Button variant="glass" size="sm" className="w-full justify-start" onClick={() => navigate('/templates')}>
                    <Image className="h-4 w-4 mr-2" />
                    Browse Templates
                  </Button>
                  <Button variant="glass" size="sm" className="w-full justify-start" onClick={() => navigate('/collaboration')}>
                    <Users className="h-4 w-4 mr-2" />
                    Join Collaboration
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;