import React from "react";
import { Button } from "@/components/ui/button";
import { Palette, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
  mode: "user" | "artist";
  onModeChange: (mode: "user" | "artist") => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex items-center bg-background border border-border rounded-2xl p-2 shadow-card">
      <Button
        variant={mode === "user" ? "hero" : "ghost"}
        size="lg"
        onClick={() => onModeChange("user")}
        className={cn(
          "flex-1 rounded-xl transition-all duration-300",
          mode === "user" 
            ? "shadow-elegant" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Users className="h-5 w-5 mr-2" />
        I'm a Customer
      </Button>
      
      <Button
        variant={mode === "artist" ? "hero" : "ghost"}
        size="lg"
        onClick={() => onModeChange("artist")}
        className={cn(
          "flex-1 rounded-xl transition-all duration-300",
          mode === "artist" 
            ? "shadow-elegant" 
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <Palette className="h-5 w-5 mr-2" />
        I'm an Artisan
      </Button>
    </div>
  );
};

export default ModeToggle;