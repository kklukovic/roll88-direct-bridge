import { Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/+VvAuDpNKH4I4OTg0";

const TelegramSection = () => {
  return (
    <section className="w-full px-4 py-5">
      <div className="max-w-md mx-auto glass rounded-2xl p-5 text-center space-y-4 border border-[hsl(var(--telegram))]/40">
        <p className="text-sm font-semibold text-foreground">
          ติดตาม Pim ใน Telegram เพื่อรับข่าวสารและคอลเลกชันรูปภาพล่าสุด! 📸
        </p>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[hsl(var(--telegram))] text-white font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_24px_hsl(var(--telegram)/0.4)]"
        >
          <Send className="w-4 h-4" />
          <span>เข้าสู่กลุ่ม Telegram (117+ Members)</span>
        </a>
      </div>
    </section>
  );
};

export default TelegramSection;
