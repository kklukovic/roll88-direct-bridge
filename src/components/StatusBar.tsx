import { Users } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="w-full py-3 px-4 border-t border-border/30">
      <div className="max-w-md mx-auto flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <Users className="w-3.5 h-3.5" />
        <span>มีผู้เข้าใช้งานล่าสุด 1,245 คน</span>
      </div>
    </div>
  );
};

export default StatusBar;
