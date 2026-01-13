import bannerImage from "@/assets/roll88-banner.png";
const HeroSection = () => {
  return <section className="w-full px-4 pt-2 pb-6">
      {/* Banner Image */}
      <div className="w-full max-w-md mx-auto mb-6 rounded-xl overflow-hidden shadow-card">
        <img alt="Roll88 New Member Bonus" className="w-full h-auto object-cover" loading="eager" src="/lovable-uploads/fddd48dc-21b8-43ef-8923-9cf5b28ebfa7.png" />
      </div>

      {/* Headline */}
      <div className="text-center space-y-3">
        <h1 className="text-2xl sm:text-3xl font-black leading-tight">
          <span className="text-gradient-gold">เว็บตรงอันดับ 1</span>
          <br />
          <span className="text-foreground">มั่นคง ปลอดภัย 100%</span>
        </h1>
        
        <p className="text-base sm:text-lg font-semibold text-secondary">
          สมัครสมาชิกใหม่รับโบนัส 100% ทันที!
        </p>
      </div>
    </section>;
};
export default HeroSection;