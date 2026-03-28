import { Pause, Play, Wifi } from "lucide-react";

const BottomBar = () => (
  <div className="flex items-center gap-3 px-5 py-3 bg-card border-t border-border">
    <button className="flex items-center gap-2 bg-warning-bg border border-warning text-warning px-4 py-2 rounded-lg text-xs font-semibold hover:brightness-110 transition-all">
      <Pause className="w-3.5 h-3.5" /> Pausar Bot
    </button>
    <button className="flex items-center gap-2 bg-profit-bg border border-profit text-profit px-4 py-2 rounded-lg text-xs font-semibold hover:brightness-110 transition-all">
      <Play className="w-3.5 h-3.5" /> Reanudar Bot
    </button>
    <div className="ml-auto flex items-center gap-2 text-[11px] text-secondary-foreground">
      <div className="w-2 h-2 rounded-full bg-profit animate-pulse-glow" />
      <Wifi className="w-3 h-3" />
      MT5 conectado · Puerto 5000
    </div>
  </div>
);

export default BottomBar;
