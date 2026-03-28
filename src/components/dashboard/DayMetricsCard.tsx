import { motion } from "framer-motion";
import { BarChart3, Flame } from "lucide-react";

const DayMetricsCard = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <BarChart3 className="w-3.5 h-3.5 text-info" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Métricas del día
      </h3>
    </div>
    <div className="space-y-2.5">
      <Row label="Trades" value={<>2 <span className="text-profit">✓2</span> / <span className="text-loss">✗0</span></>} />
      <Row label="Win rate" value={<span className="text-profit">100%</span>} />
      <Row label="RR promedio" value="1:2.12" />
      <Row label="Profit neto" value={<span className="text-profit">+$541.20</span>} />
      <Row
        label="Racha"
        value={
          <span className="text-profit flex items-center gap-1">
            3 WIN <Flame className="w-3 h-3 text-warning" />
          </span>
        }
      />
      <Row label="Setup score" value={<span className="text-score">7.4 / 10</span>} />
    </div>
  </motion.div>
);

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex justify-between items-center">
    <span className="text-xs text-secondary-foreground">{label}</span>
    <span className="font-mono text-sm font-medium tabular-nums">{value}</span>
  </div>
);

export default DayMetricsCard;
