import { motion } from "framer-motion";
import { Newspaper, ShieldAlert } from "lucide-react";

const news = [
  { time: "en 43 min", name: "FOMC Meeting Minutes", cur: "USD ★★★", urgency: "critical" as const },
  { time: "en 2h 30m", name: "CPI Release", cur: "USD ★★★", urgency: "warn" as const },
  { time: "en 5h 10m", name: "ECB Rate Decision", cur: "EUR ★★★", urgency: "low" as const },
];

const urgencyStyles = {
  critical: "border-l-loss text-loss",
  warn: "border-l-warning text-warning",
  low: "border-l-muted-foreground text-muted-foreground",
};

const NewsSection = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <div className="flex items-center gap-2 mb-4">
      <Newspaper className="w-3.5 h-3.5 text-warning" />
      <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
        Noticias de alto impacto
      </h3>
    </div>

    <div className="space-y-2">
      {news.map((n) => (
        <div
          key={n.name}
          className={`flex items-center gap-3 p-3 bg-background rounded-md border-l-2 ${urgencyStyles[n.urgency]}`}
        >
          <span className={`font-mono text-[11px] font-semibold min-w-[70px] ${urgencyStyles[n.urgency].split(" ")[1]}`}>
            {n.time}
          </span>
          <span className="text-xs text-foreground flex-1">{n.name}</span>
          <span className="text-[10px] text-muted-foreground">{n.cur}</span>
        </div>
      ))}
    </div>

    <div className="mt-3 p-3 bg-loss-bg rounded-md border border-loss-dim/30 flex items-center gap-2">
      <ShieldAlert className="w-3.5 h-3.5 text-loss" />
      <span className="text-[11px] text-loss/80">
        Trading bloqueado — reanuda aprox. 14:15hs
      </span>
    </div>
  </motion.div>
);

export default NewsSection;
