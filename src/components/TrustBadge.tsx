import { Award } from "lucide-react";

const TrustBadge = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-xs mx-auto">
        <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-card/30 border border-primary/30 shadow-gold">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
            <Award className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-primary animate-shimmer">Certificate of Excellence</p>
            <p className="text-sm font-bold text-foreground">2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
