import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

type LogType = "trade" | "block" | "news" | "info" | "error";

const filters: { label: string; value: LogType | "all" }[] = [
  { label: "Todos", value: "all" },
  { label: "Trades", value: "trade" },
  { label: "Bloqueos", value: "block" },
  { label: "Noticias", value: "news" },
  { label: "Errores", value: "error" },
];

const logs: { time: string; type: LogType; msg: string }[] = [
  { time: "14:32", type: "trade", msg: "SELL BTCUSD @ 65,985.31 — SL 66,338 TP 65,278 — Score 8.2 — IFVG confirmado" },
  { time: "14:31", type: "info", msg: "Zona IFVG detectada en BTCUSD M15 — evaluando confluencia" },
  { time: "14:15", type: "news", msg: "FOMC Meeting Minutes finalizado — trading desbloqueado" },
  { time: "13:32", type: "block", msg: "Trading bloqueado — FOMC Meeting Minutes en 43 min (USD ★★★)" },
  { time: "13:30", type: "info", msg: "Cooldown BTCUSD activado — 15 min restantes" },
  { time: "13:28", type: "trade", msg: "WIN BTCUSD +$541.20 — RR 1:2.23 — Duración 01:12:33" },
  { time: "12:15", type: "trade", msg: "BUY BTCUSD @ 66,100 — SL 66,450 TP 65,400 — Score 7.8" },
  { time: "12:10", type: "info", msg: "Análisis multi-timeframe completado — 2 zonas activas" },
  { time: "11:45", type: "block", msg: "EURUSD bloqueado por post-loss cooldown — 8 min restantes" },
  { time: "11:30", type: "error", msg: "Timeout MT5 — reconectando en 5s..." },
  { time: "11:29", type: "info", msg: "Heartbeat MT5 OK — latencia 12ms" },
  { time: "10:00", type: "news", msg: "CPI Release programado para 14:30 — monitoreo activado" },
  { time: "09:30", type: "info", msg: "Bot iniciado — Fase 1 Test Agresivo — Día 9/28" },
];

const tagStyles: Record<LogType, string> = {
  trade: "bg-profit-bg text-profit border-profit-dim",
  block: "bg-loss-bg text-loss border-loss-dim",
  news: "bg-warning-bg text-warning border-warning/30",
  info: "bg-secondary text-secondary-foreground border-border",
  error: "bg-loss-bg text-loss border-loss-dim",
};

const tagLabels: Record<LogType, string> = {
  trade: "TRADE",
  block: "BLOQUEO",
  news: "NEWS",
  info: "INFO",
  error: "ERROR",
};

const LogViewer = () => {
  const [activeFilter, setActiveFilter] = useState<LogType | "all">("all");

  const filtered = activeFilter === "all" ? logs : logs.filter((l) => l.type === activeFilter);

  return (
    <motion.div
      className="glass-card rounded-lg p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="w-3.5 h-3.5 text-primary" />
        <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
          Log en tiempo real
        </h3>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 mb-4 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-3 py-1.5 rounded-md text-[11px] font-medium border transition-colors ${
              activeFilter === f.value
                ? "bg-info-bg border-info text-info"
                : "bg-secondary border-border text-secondary-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Log entries */}
      <div className="bg-background rounded-lg border border-border p-3 max-h-[320px] overflow-y-auto scrollbar-none font-mono text-[11px] leading-relaxed space-y-1">
        {filtered.map((l, i) => (
          <div key={i} className="flex gap-2.5 items-start py-0.5">
            <span className="text-muted-foreground min-w-[40px] shrink-0">{l.time}</span>
            <span
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded border min-w-[60px] text-center shrink-0 ${tagStyles[l.type]}`}
            >
              {tagLabels[l.type]}
            </span>
            <span className="text-secondary-foreground break-words">{l.msg}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LogViewer;
