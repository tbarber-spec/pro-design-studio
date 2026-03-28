import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

const symbols = [
  { sym: "BTCUSD", status: "cooldown 32m", ok: false },
  { sym: "NAS100", status: "libre", ok: true },
  { sym: "XAUUSD", status: "libre", ok: true },
  { sym: "EURUSD", status: "cooldown 8m", ok: false },
];

const bars = [
  { label: "Riesgo día", pct: 18, value: "0.27%", color: "bg-loss" },
  { label: "Trades usados", pct: 33, value: "2 / 6", color: "bg-profit" },
  { label: "Fase progress", pct: 32, value: "32%", color: "bg-info" },
];

const SymbolStatus = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.45 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <Gauge className="w-3.5 h-3.5 text-primary" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Estado por símbolo
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-2 mb-4">
      {symbols.map((s) => (
        <div
          key={s.sym}
          className="flex justify-between items-center bg-background rounded-md px-3 py-2 border border-border"
        >
          <span className="text-xs font-semibold text-foreground">{s.sym}</span>
          <span className={`font-mono text-[11px] font-medium ${s.ok ? "text-profit" : "text-warning"}`}>
            {s.status}
          </span>
        </div>
      ))}
    </div>

    <div className="space-y-3">
      {bars.map((b) => (
        <div key={b.label} className="flex items-center gap-3">
          <span className="text-[11px] text-secondary-foreground min-w-[80px]">{b.label}</span>
          <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${b.color}`}
              initial={{ width: 0 }}
              animate={{ width: `${b.pct}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            />
          </div>
          <span className={`font-mono text-[11px] font-medium min-w-[40px] text-right ${
            b.color === "bg-loss" ? "text-loss" : b.color === "bg-info" ? "text-info" : "text-foreground"
          }`}>
            {b.value}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SymbolStatus;
