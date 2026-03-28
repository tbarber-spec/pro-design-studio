import { motion } from "framer-motion";
import { History, CheckCircle, XCircle } from "lucide-react";

const allTrades = [
  { date: "Mar 21", time: "14:32", pair: "BTCUSD", dir: "SELL", type: "IFVG", entry: "65,985", sl: "66,338", tp: "65,278", rr: "1:2", duration: "02:46:48", profit: -276.29, score: 8.2, result: "live" as const },
  { date: "Mar 21", time: "12:15", pair: "BTCUSD", dir: "SELL", type: "IFVG", entry: "66,100", sl: "66,450", tp: "65,400", rr: "1:2.23", duration: "01:12:33", profit: 541.20, score: 7.8, result: "win" as const },
  { date: "Mar 20", time: "09:15", pair: "BTCUSD", dir: "BUY", type: "OB", entry: "64,200", sl: "63,800", tp: "65,400", rr: "1:3", duration: "03:22:10", profit: 890.50, score: 8.5, result: "win" as const },
  { date: "Mar 20", time: "14:30", pair: "XAUUSD", dir: "SELL", type: "BPR", entry: "2,185", sl: "2,192", tp: "2,164", rr: "1:3", duration: "02:45:00", profit: 420.00, score: 7.2, result: "win" as const },
  { date: "Mar 19", time: "10:20", pair: "NAS100", dir: "SELL", type: "IFVG", entry: "18,420", sl: "18,480", tp: "18,240", rr: "1:3", duration: "01:30:20", profit: -180.00, score: 6.5, result: "loss" as const },
  { date: "Mar 19", time: "15:00", pair: "EURUSD", dir: "BUY", type: "OB", entry: "1.0850", sl: "1.0830", tp: "1.0910", rr: "1:3", duration: "04:10:05", profit: 310.00, score: 7.9, result: "win" as const },
  { date: "Mar 18", time: "08:00", pair: "BTCUSD", dir: "BUY", type: "IFVG", entry: "63,500", sl: "63,150", tp: "64,550", rr: "1:3", duration: "05:20:00", profit: 780.00, score: 9.1, result: "win" as const },
  { date: "Mar 18", time: "11:15", pair: "XAUUSD", dir: "BUY", type: "BPR", entry: "2,170", sl: "2,163", tp: "2,191", rr: "1:3", duration: "02:00:30", profit: -95.00, score: 5.8, result: "loss" as const },
];

const FullTradeHistory = () => (
  <motion.div
    className="glass-card rounded-lg p-5 overflow-x-auto scrollbar-none"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <History className="w-3.5 h-3.5 text-secondary-foreground" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Historial completo de trades
      </h3>
    </div>

    <table className="w-full text-xs min-w-[900px]">
      <thead>
        <tr className="border-b border-border">
          {["Fecha", "Hora", "Par", "Dir", "Tipo", "Entry", "SL", "TP", "RR", "Duración", "Profit", "Score", "Resultado"].map((h) => (
            <th key={h} className="text-left py-2 px-2 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allTrades.map((t, i) => (
          <tr key={i} className="border-b border-border/30 hover:bg-card-elevated transition-colors">
            <td className="py-2.5 px-2 text-muted-foreground">{t.date}</td>
            <td className="py-2.5 px-2 font-mono text-muted-foreground">{t.time}</td>
            <td className="py-2.5 px-2 font-semibold text-foreground">{t.pair}</td>
            <td className="py-2.5 px-2">
              <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded ${
                t.dir === "BUY" ? "bg-profit-dim text-profit" : "bg-loss-dim text-loss"
              }`}>
                {t.dir}
              </span>
            </td>
            <td className="py-2.5 px-2 text-muted-foreground">{t.type}</td>
            <td className="py-2.5 px-2 font-mono">{t.entry}</td>
            <td className="py-2.5 px-2 font-mono text-loss">{t.sl}</td>
            <td className="py-2.5 px-2 font-mono text-profit">{t.tp}</td>
            <td className="py-2.5 px-2 font-mono">{t.rr}</td>
            <td className="py-2.5 px-2 font-mono text-muted-foreground">{t.duration}</td>
            <td className={`py-2.5 px-2 font-mono font-medium ${t.profit >= 0 ? "text-profit" : "text-loss"}`}>
              {t.profit >= 0 ? "+" : ""}${Math.abs(t.profit).toFixed(2)}
            </td>
            <td className="py-2.5 px-2">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                t.score >= 7.5 ? "bg-profit/10 text-profit" : t.score >= 6 ? "bg-warning/10 text-warning" : "bg-loss/10 text-loss"
              }`}>
                {t.score}
              </span>
            </td>
            <td className="py-2.5 px-2">
              {t.result === "live" ? (
                <div className="flex items-center gap-1.5 text-info font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-info animate-blink" /> ABIERTO
                </div>
              ) : t.result === "win" ? (
                <div className="flex items-center gap-1.5 text-profit font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> WIN
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-loss font-medium">
                  <XCircle className="w-3.5 h-3.5" /> LOSS
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

export default FullTradeHistory;
