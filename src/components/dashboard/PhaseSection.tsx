import { motion } from "framer-motion";

const phases = [
  { id: 1, label: "F1 · Test", active: true },
  { id: 2, label: "F2 · Filtrar", active: false },
  { id: 3, label: "F3 · Optimizar", active: false },
  { id: 4, label: "F4 · Estabilizar", active: false },
  { id: 5, label: "F5 · Producción", active: false },
];

const params = [
  { label: "Cooldown", value: "15 min" },
  { label: "Max trades", value: "6/día" },
  { label: "Score mín", value: "0" },
  { label: "Pérdida máx", value: "2%" },
];

const PhaseSection = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.25 }}
  >
    <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase mb-4">
      Fase de desarrollo
    </h3>

    <div className="flex flex-col lg:flex-row lg:items-start gap-5">
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-foreground">
          FASE 1 — TEST AGRESIVO
          <span className="text-xs font-normal text-muted-foreground ml-2">Día 9 de 28 · faltan 19 días</span>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-secondary rounded-full mt-3 mb-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--gradient-phase)" }}
            initial={{ width: 0 }}
            animate={{ width: "32%" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          />
        </div>

        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Generar volumen de trades para detectar bugs y recolectar datos reales — filtros mínimos, máxima ejecución
        </p>

        <div className="flex flex-wrap gap-4 mt-3">
          {params.map((p) => (
            <span key={p.label} className="text-[11px] text-muted-foreground">
              {p.label} <span className="text-secondary-foreground font-medium">{p.value}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {phases.map((ph) => (
          <div
            key={ph.id}
            className={`px-3 py-1.5 rounded-md text-[10px] font-medium border transition-colors ${
              ph.active
                ? "border-info text-info bg-info-bg"
                : "border-border text-muted-foreground bg-secondary"
            }`}
          >
            {ph.label}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default PhaseSection;
