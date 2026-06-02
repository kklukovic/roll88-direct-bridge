import { ArrowRight } from "lucide-react";

const CASINO_URL = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-navy/70 border-b border-primary/10">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-foreground">ROLL</span>
            <span className="text-gradient-gold">88</span>
          </span>
        </a>
        <a
          href={CASINO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-gold text-primary-foreground font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-gold"
        >
          <span>ทางเข้าเล่นหลัก</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
