import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

const rows = [
  { label: "Balance", value: "$101,220.13", color: "" },
  { label: "Equity", value: "$100,943.84", color: "" },
  { label: "P&L hoy", value: "-$276.29 (0.27%)", color: "text-loss" },
  { label: "Drawdown", value: "0.27%", color: "text-warning" },
  { label: "Margen libre", value: "$100,755.12", color: "" },
];

const AccountCard = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <Wallet className="w-3.5 h-3.5 text-primary" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Cuenta
      </h3>
    </div>
    <div className="space-y-2.5">
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between items-center">
          <span className="text-xs text-secondary-foreground">{r.label}</span>
          <span className={`font-mono text-sm font-medium tabular-nums ${r.color || "text-foreground"}`}>
            {r.value}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default AccountCard;
