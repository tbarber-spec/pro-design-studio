import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Wifi } from "lucide-react";

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (d: Date) =>
    `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="flex items-center gap-4 px-5 py-3 bg-card border-b border-border">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-profit animate-pulse-glow" />
        <div className="absolute inset-[-3px] rounded-full border-2 border-profit opacity-0 animate-ping" />
      </motion.div>

      <span className="text-[11px] font-semibold tracking-widest text-secondary-foreground uppercase">
        Activo
      </span>

      <div className="h-4 w-px bg-border" />

      <span className="text-warning font-semibold text-xs tracking-wide">
        FASE 1 — Test Agresivo
      </span>

      <span className="text-muted-foreground text-xs">
        Día 9 / 28 · faltan 19 días
      </span>

      <div className="ml-auto flex items-center gap-4">
        <div className="flex items-center gap-2 bg-secondary rounded-full px-3 py-1.5">
          <Wifi className="w-3 h-3 text-profit" />
          <span className="text-[11px] text-secondary-foreground">MT5</span>
        </div>

        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {formatTime(time)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
