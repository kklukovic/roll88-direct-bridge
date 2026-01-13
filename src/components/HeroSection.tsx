import bannerImage from "@/assets/roll88-banner.png";
const HeroSection = () => {
  return <section className="w-full px-4 pt-2 pb-4">
      {/* Banner Image */}
      <div className="w-full max-w-md mx-auto mb-4 rounded-xl overflow-hidden shadow-card">
        <img alt="Roll88 New Member Bonus" className="w-full h-auto object-cover" loading="eager" src="/lovable-uploads/fddd48dc-21b8-43ef-8923-9cf5b28ebfa7.png" />
      </div>

      {/* Headline */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-black leading-tight text-gradient-gold">
          เว็บตรงปี 2026 – แตกหนัก จ่ายจริง โบนัส 100%
        </h1>
        
        <p className="text-base sm:text-lg font-semibold text-secondary">
          สมัครสมาชิกใหม่รับโบนัส 100% ทันที!
        </p>
      </div>
    </section>;
};
export default HeroSection;