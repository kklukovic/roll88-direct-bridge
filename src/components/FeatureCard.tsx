import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border/50 shadow-card backdrop-blur-sm">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center mb-3 animate-float">
        <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2.5} />
      </div>
      <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground text-center leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
