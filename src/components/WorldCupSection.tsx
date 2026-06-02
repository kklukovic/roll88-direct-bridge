const items = [
  {
    icon: "👕",
    title: "ลุ้นเสื้อบอลทีมชาติของแท้",
    desc: "ตอบคำถามในกิจกรรม Free2Play",
  },
  {
    icon: "💸",
    title: "Cashback หนักมากช่วงฟุตบอลโลก",
    desc: "ยิ่งแทงยิ่งได้คืน",
  },
  {
    icon: "🏆",
    title: "เงินรางวัลฟรีอีกเพียบ",
    desc: "ทุกคนมีสิทธิ์ลุ้น",
  },
];

const WorldCupSection = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-md mx-auto space-y-4 animate-fade-up">
        <h2 className="text-center text-xl font-black text-gradient-gold">
          ⚽ โปรฟุตบอลโลกพิเศษ
        </h2>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="glass glass-gold rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-transform"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 flex items-center justify-center text-2xl">
                {it.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-foreground leading-snug">{it.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldCupSection;
