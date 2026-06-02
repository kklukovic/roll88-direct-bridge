import { Award } from "lucide-react";

const TrustBadge = () => {
  return (
    <div className="mt-4 glass glass-gold rounded-2xl px-5 py-3 flex items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
        <Award className="w-5 h-5 text-primary-foreground" />
      </div>
      <div className="text-left">
        <p className="text-xs font-semibold animate-shimmer">🏅 Certificate of Excellence</p>
        <p className="text-sm font-black text-foreground">2026</p>
      </div>
    </div>
  );
};

export default TrustBadge;
