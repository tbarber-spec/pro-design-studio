import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Target, Shield, Zap, Award } from "lucide-react";

const stats = [
  {
    label: "Win Rate",
    value: "68.4%",
    sub: "26W / 12L",
    badge: "Bueno",
    badgeType: "good" as const,
    icon: Target,
  },
  {
    label: "Profit Factor",
    value: "2.14",
    sub: "Gross W/L ratio",
    badge: "Sólido",
    badgeType: "good" as const,
    icon: Zap,
  },
  {
    label: "RR Promedio",
    value: "1:2.31",
    sub: "Sobre 38 trades",
    badge: "Óptimo",
    badgeType: "good" as const,
    icon: Award,
  },
  {
    label: "Max Drawdown",
    value: "4.82%",
    sub: "Peor racha -$4,820",
    badge: "Alerta",
    badgeType: "warn" as const,
    icon: Shield,
  },
];

const extraStats = [
  { label: "Total Trades", value: "38" },
  { label: "Profit Total", value: "+$12,480", color: "text-profit" },
  { label: "Mejor Día", value: "+$2,140 (Mar 15)", color: "text-profit" },
  { label: "Peor Día", value: "-$1,380 (Mar 08)", color: "text-loss" },
];

const HistoricalStats = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          className="glass-card rounded-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * i }}
        >
          <div className="flex items-center gap-2 mb-3">
            <s.icon className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold tracking-[0.1em] text-muted-foreground uppercase">
              {s.label}
            </span>
          </div>
          <div className="text-2xl font-bold font-mono tabular-nums text-foreground mb-1">
            {s.value}
          </div>
          <div className="text-[11px] text-muted-foreground mb-2">{s.sub}</div>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
              s.badgeType === "good"
                ? "bg-profit-bg text-profit border-profit-dim"
                : "bg-warning-bg text-warning border-warning/30"
            }`}
          >
            {s.badge}
          </span>
        </motion.div>
      ))}
    </div>

    <motion.div
      className="glass-card rounded-lg p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase mb-4">
        Resumen general
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {extraStats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[10px] text-muted-foreground mb-1">{s.label}</div>
            <div className={`font-mono text-sm font-bold tabular-nums ${s.color || "text-foreground"}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default HistoricalStats;
