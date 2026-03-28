import { motion } from "framer-motion";
import { TrendingDown, Clock } from "lucide-react";

const PositionCard = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <TrendingDown className="w-3.5 h-3.5 text-loss" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Posición activa
      </h3>
    </div>

    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
      <span className="text-[10px] font-bold tracking-wider bg-loss-dim text-loss/90 px-2.5 py-1 rounded">
        SELL
      </span>
      <span className="text-sm font-bold text-foreground">BTCUSD</span>
      <span className="ml-auto text-[10px] font-medium text-score bg-score/10 px-2 py-0.5 rounded">
        IFVG · Score 8.2
      </span>
    </div>

    <div className="space-y-2.5">
      <Row label="Entry" value="65,985.31" />
      <Row label="Stop Loss" value="66,338.53" color="text-loss" />
      <Row label="Take Profit" value="65,278.88" color="text-profit" />
      <Row label="P&L flotante" value="-$276.29" color="text-loss" />
      <div className="flex justify-between items-center">
        <span className="text-xs text-secondary-foreground flex items-center gap-1.5">
          <Clock className="w-3 h-3" />Duración
        </span>
        <span className="font-mono text-sm text-muted-foreground tabular-nums">02:46:48</span>
      </div>
    </div>
  </motion.div>
);

const Row = ({ label, value, color = "text-foreground" }: { label: string; value: string; color?: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-xs text-secondary-foreground">{label}</span>
    <span className={`font-mono text-sm font-medium tabular-nums ${color}`}>{value}</span>
  </div>
);

export default PositionCard;
