import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const AlertBanner = () => {
  return (
    <motion.div
      className="flex items-center gap-3 px-5 py-2.5 bg-loss-bg border-b border-loss-dim/30 animate-slide-down"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-loss animate-blink" />
      <AlertTriangle className="w-3.5 h-3.5 text-loss" />
      <span className="text-xs text-loss/80">
        Bot bloqueado por <span className="font-semibold text-loss">FOMC Meeting Minutes</span> (USD ★★★) — reanuda en 43 min
      </span>
      <span className="ml-auto text-[10px] font-bold tracking-wider bg-loss-dim/50 text-loss px-2.5 py-1 rounded">
        NEWS FILTER
      </span>
    </motion.div>
  );
};

export default AlertBanner;
