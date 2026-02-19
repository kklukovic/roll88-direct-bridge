import { ArrowRight } from "lucide-react";

const Header = () => {
  const ctaUrl = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

  return (
    <header className="w-full py-3 px-4 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="text-2xl font-black tracking-tight">
          <span className="text-secondary">ROLL</span>
          <span className="text-gradient-gold">88</span>
        </span>
      </div>
      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-gold"
      >
        <span>ทางเข้าเล่นหลัก</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </header>
  );
};

export default Header;
