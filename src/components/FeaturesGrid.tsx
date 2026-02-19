import { Trophy, Gift, Clock } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Trophy,
    title: "Jackpot Legend",
    description: "กิจกรรม Jackpot Legend 5,000,000 บาท 💰",
  },
  {
    icon: Gift,
    title: "สิทธิพิเศษ",
    description: "สิทธิพิเศษสมาชิกใหม่ + 88 ฟรีสปิน 🎰",
  },
  {
    icon: Clock,
    title: "Happy Hour",
    description: "19:00 - 21:00 โบนัส 8% ทุกวัน! 🔥",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="w-full px-4 py-3">
      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
