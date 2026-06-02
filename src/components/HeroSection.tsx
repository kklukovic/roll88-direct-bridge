import { ArrowRight, Sparkles } from "lucide-react";
import pimHero from "@/assets/pim-hero.png.asset.json";

const CASINO_URL = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

const HeroSection = () => {
  return (
    <section id="top" className="relative w-full px-4 pt-6 pb-8 overflow-hidden">
      {/* Stadium light beams */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-20 left-1/4 w-40 h-[420px] rotate-12 bg-gradient-to-b from-accent/30 via-accent/5 to-transparent blur-3xl animate-spotlight" />
        <div className="absolute -top-20 right-1/4 w-40 h-[420px] -rotate-12 bg-gradient-to-b from-primary/25 via-primary/5 to-transparent blur-3xl animate-spotlight" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-md mx-auto text-center space-y-5 animate-fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass glass-gold">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-sparkle" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            🏆 Pim Recommends · กิจกรรมพิเศษ
          </span>
        </div>

        {/* Pim photo */}
        <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52">
          <div className="absolute inset-0 rounded-full bg-gradient-gold blur-2xl opacity-40 animate-pulse-gold" />
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-gold shadow-gold">
            <img
              id="pim-hero"
              src={pimHero.url}
              alt="Pim - Roll88 World Cup 2026"
              className="w-full h-full rounded-full object-cover border-2 border-navy"
            />
          </div>
          {/* sparkles */}
          <span className="absolute -top-1 right-4 text-primary text-xl animate-sparkle">✨</span>
          <span className="absolute bottom-2 -left-1 text-accent text-lg animate-sparkle" style={{ animationDelay: "0.8s" }}>✨</span>
        </div>

        {/* Quote */}
        <p className="text-sm italic text-muted-foreground px-4">
          "พิมแนะนำเลย! แค่สมัครสมาชิกก็มีสิทธิ์ลุ้นได้ทันที 💛"
        </p>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black leading-tight text-gradient-gold">
            ฟุตบอลโลก 2026 มาแล้ว! ⚽
          </h1>
          <p className="text-base font-semibold text-foreground/90 px-2">
            ตอบคำถามลุ้นเสื้อบอลทีมชาติของแท้
            <br />
            + เงินรางวัลฟรีอีกเพียบ 🏆
          </p>
        </div>

        {/* Deadline */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-bold text-foreground">
            ⏰ ถึง 29 มิถุนายน 2026 เท่านั้น
          </span>
        </div>

        {/* CTA */}
        <a
          href={CASINO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 w-full min-h-[56px] px-6 rounded-2xl bg-gradient-gold text-primary-foreground font-black text-lg animate-pulse-gold hover:scale-[1.02] active:scale-95 transition-transform"
        >
          <span>🎮 ร่วมสนุกเลย คลิกที่นี่</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
