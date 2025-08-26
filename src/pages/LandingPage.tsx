import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  Zap, 
  Crown, 
  ArrowRight, 
  Users, 
  Layers, 
  Palette,
  Star,
  Play,
  ChevronRight
} from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Creation",
      description: "Generate stunning visuals with simple text prompts",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with live editing",
      gradient: "from-secondary to-accent"
    },
    {
      icon: Layers,
      title: "Advanced Tools",
      description: "Professional design tools at your fingertips",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center animate-glow-pulse">
              <Crown className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DesignForge
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Button variant="ghost" onClick={() => navigate('/templates')}>Templates</Button>
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>Dashboard</Button>
            <Button variant="outline">Sign In</Button>
            <Button variant="default" onClick={() => navigate('/workspace')}>
              Start Designing
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Design workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`space-y-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/20 rounded-full border border-primary/30">
                <Sparkles className="h-4 w-4 text-primary animate-glow-pulse" />
                <span className="text-sm font-medium">AI-Powered Design Studio</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Create with
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  AI Magic
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Transform your ideas into stunning visuals with AI-powered design tools. 
                Collaborate in real-time and bring your creative vision to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="floating" 
                  size="lg" 
                  onClick={() => navigate('/workspace')}
                  className="text-lg px-8 py-6 h-auto"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Start Designing with AI
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                
                <Button variant="glass" size="lg" className="text-lg px-8 py-6 h-auto">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`relative ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}>
              <Card className="bg-gradient-surface border-border/50 shadow-hover-lift transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Palette className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
                      <p className="text-lg font-semibold">Interactive Design Canvas</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powered by <span className="bg-gradient-accent bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of design with cutting-edge AI tools and collaborative features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`group bg-gradient-surface border-border/50 hover:shadow-hover-lift transition-all duration-500 hover:scale-105 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Ideas?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of creators using DesignForge to bring their visions to life
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center">
                  <Star className="h-5 w-5 text-primary-foreground" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold">10,000+ Happy Creators</p>
              <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ 4.9/5 Rating</p>
            </div>
          </div>
          <Button 
            variant="floating" 
            size="lg" 
            onClick={() => navigate('/workspace')}
            className="mt-8 text-lg px-12 py-6 h-auto"
          >
            Get Started Free
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;