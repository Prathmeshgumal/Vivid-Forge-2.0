import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Crown,
  ArrowLeft,
  Heart,
  Download,
  Eye,
  Star,
  Zap,
  Layout,
  Image,
  FileText,
  Palette,
  Sparkles,
  TrendingUp
} from "lucide-react";

const Templates = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", label: "All Templates", icon: Layout },
    { id: "social", label: "Social Media", icon: Image },
    { id: "business", label: "Business", icon: FileText },
    { id: "creative", label: "Creative", icon: Palette },
    { id: "ai-generated", label: "AI Generated", icon: Sparkles },
  ];

  const templates = [
    {
      id: 1,
      title: "Modern Brand Identity",
      category: "business",
      thumbnail: "gradient-to-br from-primary to-secondary",
      author: "DesignForge AI",
      downloads: 1420,
      rating: 4.9,
      isPremium: false,
      isNew: true,
      tags: ["branding", "modern", "corporate"]
    },
    {
      id: 2,
      title: "Vibrant Social Post",
      category: "social",
      thumbnail: "gradient-to-br from-accent to-primary",
      author: "Creative Studio",
      downloads: 2134,
      rating: 4.8,
      isPremium: true,
      isNew: false,
      tags: ["social", "vibrant", "engagement"]
    },
    {
      id: 3,
      title: "AI Abstract Art",
      category: "ai-generated",
      thumbnail: "gradient-to-br from-secondary to-accent",
      author: "AI Generator",
      downloads: 892,
      rating: 4.7,
      isPremium: false,
      isNew: true,
      tags: ["abstract", "ai", "artistic"]
    },
    {
      id: 4,
      title: "Minimalist Poster",
      category: "creative",
      thumbnail: "gradient-to-br from-primary/80 to-secondary/80",
      author: "Design Collective",
      downloads: 1687,
      rating: 4.9,
      isPremium: true,
      isNew: false,
      tags: ["minimalist", "poster", "clean"]
    },
    {
      id: 5,
      title: "Electric Presentation",
      category: "business",
      thumbnail: "gradient-to-br from-accent to-primary/80",
      author: "Pro Templates",
      downloads: 3241,
      rating: 5.0,
      isPremium: true,
      isNew: false,
      tags: ["presentation", "electric", "professional"]
    },
    {
      id: 6,
      title: "Neon Gaming Banner",
      category: "creative",
      thumbnail: "gradient-to-br from-secondary to-accent/80",
      author: "Game Design Co",
      downloads: 1156,
      rating: 4.6,
      isPremium: false,
      isNew: true,
      tags: ["gaming", "neon", "banner"]
    },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
              Template Gallery
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="glass" size="sm">
            <Zap className="h-4 w-4 mr-2" />
            Create with AI
          </Button>
          <Button variant="default" onClick={() => navigate('/workspace')}>
            Start Designing
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Stunning <span className="bg-gradient-accent bg-clip-text text-transparent">Templates</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional designs to jumpstart your creative projects
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search templates, tags, or creators..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 bg-muted/50 border-border/50"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 px-4 bg-muted/50 border border-border/50 rounded-lg text-sm"
            >
              <option value="popular">Most Popular</option>
              <option value="recent">Most Recent</option>
              <option value="rating">Highest Rated</option>
              <option value="downloads">Most Downloaded</option>
            </select>
            
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <category.icon className="h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <Card 
              key={template.id}
              className="group bg-gradient-surface border-border/50 hover:shadow-hover-lift transition-all duration-500 hover:scale-105 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate('/workspace')}
            >
              {/* Template Thumbnail */}
              <div className="relative overflow-hidden rounded-t-lg">
                <div className={`aspect-video bg-${template.thumbnail} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Layout className="h-12 w-12 text-white/80" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="glass" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="glass" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="default" size="sm">
                      Use Template
                    </Button>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {template.isNew && (
                      <Badge className="bg-accent text-accent-foreground">New</Badge>
                    )}
                    {template.isPremium && (
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        <Crown className="h-3 w-3 mr-1" />
                        Pro
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {template.title}
                  </h3>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mb-3">by {template.author}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{template.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>{template.downloads.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <TrendingUp className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;