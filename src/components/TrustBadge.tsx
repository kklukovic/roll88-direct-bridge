import { Award } from "lucide-react";

const TrustBadge = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center gap-3 py-3 px-5 rounded-xl bg-card/30 border border-primary/30 shadow-gold">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
          <Award className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="text-left">
          <p className="text-xs font-semibold text-primary animate-shimmer">Certificate of Excellence</p>
          <p className="text-sm font-bold text-foreground">2026</p>
        </div>
      </div>
    </div>
  );
};

export default TrustBadge;
