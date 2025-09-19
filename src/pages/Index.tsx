import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import DashboardPreview from "@/components/DashboardPreview";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-crafts.jpg";

const Index = () => {
  const [selectedMode, setSelectedMode] = useState<"user" | "artist">("user");

  const handleGetStarted = () => {
    // Navigation logic will be added when actual dashboards are created
    console.log(`Navigating to ${selectedMode} dashboard`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                KalaSetu
              </h1>
            </div>
            <Button variant="hero-outline" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Connecting Artisans with
              <span className="bg-gradient-hero bg-clip-text text-transparent block">
                Art Lovers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover authentic handcrafted treasures directly from skilled artisans across India, 
              or showcase your artistic masterpieces to art enthusiasts worldwide.
            </p>
            
            {/* Mode Selection */}
            <div className="max-w-lg mx-auto mb-12">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Choose your journey
              </p>
              <ModeToggle mode={selectedMode} onModeChange={setSelectedMode} />
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleGetStarted}
              className="px-8 py-6 text-lg"
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-brand-warm/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedMode === "user" ? "Discover Amazing Crafts" : "Grow Your Craft Business"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {selectedMode === "user" 
                ? "Explore a curated marketplace of authentic handcrafted items from talented artisans across India."
                : "Professional tools to manage your inventory, orders, and connect with customers worldwide."
              }
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <DashboardPreview mode={selectedMode} />
          </div>

          <div className="text-center mt-12">
            <Button variant="hero-outline" size="lg">
              {selectedMode === "user" ? "Explore Marketplace" : "Start Selling"}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                KalaSetu
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bridging traditional craftsmanship with modern commerce
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
