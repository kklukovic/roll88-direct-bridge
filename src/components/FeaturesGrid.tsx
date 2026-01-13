import { Wallet, Zap, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Wallet,
    title: "Seamless Wallet",
    description: "กระเป๋าเดียวไม่ต้องโยกเงิน",
  },
  {
    icon: Zap,
    title: "Fast Deposit/Withdraw",
    description: "ฝาก-ถอน ออโต้ รวดเร็ว",
  },
  {
    icon: Shield,
    title: "Direct Web",
    description: "เว็บตรงไม่ผ่านเอเย่นต์",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
