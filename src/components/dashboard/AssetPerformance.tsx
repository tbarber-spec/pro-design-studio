import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const assets = [
  {
    symbol: "BTCUSD",
    trades: 18,
    wins: 13,
    losses: 5,
    profit: 8420,
    winRate: 72.2,
    badge: "best" as const,
  },
  {
    symbol: "NAS100",
    trades: 8,
    wins: 5,
    losses: 3,
    profit: 3210,
    winRate: 62.5,
    badge: null,
  },
  {
    symbol: "XAUUSD",
    trades: 7,
    wins: 5,
    losses: 2,
    profit: 2100,
    winRate: 71.4,
    badge: null,
  },
  {
    symbol: "EURUSD",
    trades: 5,
    wins: 3,
    losses: 2,
    profit: -1250,
    winRate: 60.0,
    badge: "worst" as const,
  },
];

const AssetPerformance = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase mb-4">
      Rendimiento por activo
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {assets.map((a, i) => (
        <div
          key={a.symbol}
          className={`relative bg-background rounded-lg p-4 border ${
            a.badge === "best"
              ? "border-profit-dim"
              : a.badge === "worst"
              ? "border-loss-dim"
              : "border-border"
          }`}
        >
          {a.badge && (
            <span
              className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                a.badge === "best"
                  ? "bg-profit-bg text-profit border-profit-dim"
                  : "bg-loss-bg text-loss border-loss-dim"
              }`}
            >
              {a.badge === "best" ? "★ MEJOR" : "▼ PEOR"}
            </span>
          )}
          <div className="text-sm font-bold text-foreground mb-0.5">{a.symbol}</div>
          <div className="text-[10px] text-muted-foreground mb-3">
            {a.trades} trades · {a.wins}W / {a.losses}L
          </div>
          <div
            className={`text-xl font-bold font-mono tabular-nums mb-2 ${
              a.profit >= 0 ? "text-profit" : "text-loss"
            }`}
          >
            {a.profit >= 0 ? "+" : ""}${Math.abs(a.profit).toLocaleString()}
          </div>
          {/* Win rate bar */}
          <div className="h-1 bg-secondary rounded-full overflow-hidden mb-2">
            <div
              className={`h-full rounded-full ${a.profit >= 0 ? "bg-profit" : "bg-loss"}`}
              style={{ width: `${a.winRate}%` }}
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div>
              <div className="text-[10px] text-muted-foreground">Win Rate</div>
              <div className="text-[11px] font-semibold font-mono">{a.winRate}%</div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground">Trades</div>
              <div className="text-[11px] font-semibold font-mono">{a.trades}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default AssetPerformance;
