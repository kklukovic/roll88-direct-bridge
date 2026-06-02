const features = [
  { icon: "🏆", title: "Jackpot Legend", desc: "กิจกรรม 5,000,000 บาท" },
  { icon: "🎁", title: "สิทธิพิเศษสมาชิกใหม่", desc: "+88 ฟรีสปิน" },
  { icon: "🕐", title: "Happy Hour", desc: "19:00-21:00 โบนัส 8% ทุกวัน" },
];

const FeaturesGrid = () => {
  return (
    <section className="w-full px-4 py-4">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-3 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center text-xl mb-2 shadow-gold animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
              {f.icon}
            </div>
            <h3 className="text-xs font-bold text-foreground leading-tight">{f.title}</h3>
            <p className="text-[10px] text-muted-foreground mt-1 leading-snug">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
