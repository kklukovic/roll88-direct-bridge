import { useEffect, useState } from "react";
import { Users } from "lucide-react";

const StatusBar = () => {
  const [count, setCount] = useState(1245);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + (Math.random() > 0.5 ? 1 : 0));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full py-3 px-4 border-t border-border/30">
      <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <Users className="w-3.5 h-3.5" />
        <span>
          มีผู้เข้าใช้งานล่าสุด <span className="font-bold text-foreground tabular-nums">{count.toLocaleString()}</span> คน
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
