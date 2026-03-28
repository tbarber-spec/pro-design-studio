import { motion } from "framer-motion";
import { History, CheckCircle } from "lucide-react";

const trades = [
  {
    time: "02:46", pair: "BTCUSD", dir: "SELL", type: "IFVG",
    entry: "65,985", sl: "66,338", tp: "65,278", rr: "1:2",
    duration: "02:46:48", profit: "-$276.29", profitPositive: false,
    score: 8.2, scoreLevel: "high" as const, result: "live" as const,
  },
  {
    time: "00:18", pair: "BTCUSD", dir: "SELL", type: "IFVG",
    entry: "66,100", sl: "66,450", tp: "65,400", rr: "1:2.23",
    duration: "01:12:33", profit: "+$541.20", profitPositive: true,
    score: 7.8, scoreLevel: "high" as const, result: "win" as const,
  },
];

const TradeHistory = () => (
  <motion.div
    className="glass-card rounded-lg p-5 overflow-x-auto scrollbar-none"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <History className="w-3.5 h-3.5 text-secondary-foreground" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Historial de hoy
      </h3>
    </div>

    <table className="w-full text-xs">
      <thead>
        <tr className="border-b border-border">
          {["Hora", "Par", "Dir", "Tipo", "Entry", "SL", "TP", "RR", "Duración", "Profit", "Score", "Resultado"].map((h) => (
            <th key={h} className="text-left py-2 px-2 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {trades.map((t, i) => (
          <motion.tr
            key={i}
            className="border-b border-border/50 hover:bg-card-elevated transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + i * 0.05 }}
          >
            <td className="py-3 px-2 font-mono text-muted-foreground">{t.time}</td>
            <td className="py-3 px-2 font-semibold text-foreground">{t.pair}</td>
            <td className="py-3 px-2">
              <span className="text-[10px] font-bold tracking-wider bg-loss-dim text-loss/90 px-2 py-0.5 rounded">
                {t.dir}
              </span>
            </td>
            <td className="py-3 px-2 text-muted-foreground">{t.type}</td>
            <td className="py-3 px-2 font-mono">{t.entry}</td>
            <td className="py-3 px-2 font-mono text-loss">{t.sl}</td>
            <td className="py-3 px-2 font-mono text-profit">{t.tp}</td>
            <td className="py-3 px-2 font-mono">{t.rr}</td>
            <td className="py-3 px-2 font-mono text-muted-foreground">{t.duration}</td>
            <td className={`py-3 px-2 font-mono font-medium ${t.profitPositive ? "text-profit" : "text-loss"}`}>
              {t.profit}
            </td>
            <td className="py-3 px-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                t.scoreLevel === "high" ? "bg-profit/10 text-profit" : "bg-warning/10 text-warning"
              }`}>
                {t.score}
              </span>
            </td>
            <td className="py-3 px-2">
              {t.result === "live" ? (
                <div className="flex items-center gap-1.5 text-info font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-info animate-blink" />
                  ABIERTO
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-profit font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  WIN
                </div>
              )}
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

export default TradeHistory;
