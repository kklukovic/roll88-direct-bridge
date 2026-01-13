const Header = () => {
  const ctaUrl = "https://login.rollpartners.com/visit/?bta=35172&nci=5345";

  return (
    <header className="w-full py-4 px-4 flex flex-col justify-center items-center gap-2">
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
        className="text-sm text-secondary underline hover:text-primary transition-colors"
      >
        👉 [คลิกที่นี่] รับโบนัสสมาชิกใหม่ 100%
      </a>
    </header>
  );
};

export default Header;
