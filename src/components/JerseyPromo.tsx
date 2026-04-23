import { Trophy, ArrowRight } from "lucide-react";
import pimImage from "@/assets/pim-recommends.png";

const JerseyPromo = () => {
  const ctaUrl = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

  return (
    <section className="w-full px-4 py-4">
      <div className="max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-card via-navy-light to-card border border-primary/30 shadow-card backdrop-blur-sm">
        {/* Header strip */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-b border-primary/20">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Pim Recommends • กิจกรรมพิเศษ
          </span>
        </div>

        <div className="p-4 space-y-3">
          {/* Pim + headline */}
          <div className="flex gap-3 items-start">
            <div className="relative shrink-0">
              <img
                src={pimImage}
                alt="Pim recommends Roll88"
                className="w-20 h-20 rounded-xl object-cover border-2 border-primary/40 shadow-gold"
                loading="lazy"
              />
              <span className="absolute -bottom-1 -right-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-primary text-primary-foreground shadow">
                Pim ✨
              </span>
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-base font-black leading-tight text-gradient-gold">
                🎉 ROLL88 แจกเสื้อบอลทีมชาติของแท้!
              </h3>
              <p className="text-xs text-muted-foreground leading-snug">
                "พิมแนะนำเลย! แค่สมัครสมาชิกก็มีสิทธิ์ลุ้นได้ทันที 💛"
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/90 leading-relaxed">
            ร่วมสนุกในกิจกรรม{" "}
            <span className="font-bold text-primary">
              "ตอบคำถามลุ้นเสื้อบอลทีมชาติของแท้"
            </span>{" "}
            พร้อมรับเงินรางวัลฟรีอีกเพียบ! 🏆
          </p>

          {/* Event period */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/40 border border-border/50">
            <span className="text-base">⏰</span>
            <span className="text-xs font-semibold text-foreground">
              ระยะเวลา: ถึง 29 เมษายน 2026 เท่านั้น
            </span>
          </div>

          {/* CTA */}
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-gold-light text-primary-foreground font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-gold"
          >
            <span>📲 ร่วมสนุกเลย คลิกที่นี่</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JerseyPromo;
