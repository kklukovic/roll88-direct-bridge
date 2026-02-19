import { Send } from "lucide-react";

const TelegramSection = () => {
  return (
    <section className="w-full px-4 py-4">
      <div className="max-w-md mx-auto rounded-xl bg-card/80 border border-border/50 p-5 text-center space-y-3 backdrop-blur-sm">
        <p className="text-sm font-semibold text-foreground">
          ติดตาม Pim ใน Telegram เพื่อรับข่าวสารและคอลเลกชั่นรูปภาพล่าสุด! 📸
        </p>
        <a
          href="https://t.me/+VvAuDpNKH4I4OTg0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[hsl(200,80%,45%)] text-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>เข้าสู่กลุ่ม Telegram (36 Members)</span>
        </a>
      </div>
    </section>
  );
};

export default TelegramSection;
