import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, ReferenceLine } from "recharts";

const weekData = [
  { label: "Lun", pnl: 420, date: "2024-03-18" },
  { label: "Mar", pnl: -180, date: "2024-03-19" },
  { label: "Mié", pnl: 680, date: "2024-03-20" },
  { label: "Jue", pnl: 310, date: "2024-03-21" },
  { label: "Vie", pnl: -95, date: "2024-03-22" },
  { label: "Sáb", pnl: 0, date: "2024-03-23" },
  { label: "Dom", pnl: 0, date: "2024-03-24" },
];

const todayIndex = 3; // Thursday

const WeeklyPnL = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
  >
    <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase mb-3">
      P&L semanal
    </h3>

    {/* Day pills */}
    <div className="flex gap-2 mb-4 flex-wrap">
      {weekData.map((d, i) => (
        <div
          key={d.label}
          className={`px-3 py-1 rounded-md text-[11px] font-bold font-mono tabular-nums border ${
            i === todayIndex ? "ring-2 ring-info ring-offset-1 ring-offset-background " : ""
          }${
            d.pnl > 0
              ? "bg-profit-bg text-profit border-profit-dim"
              : d.pnl < 0
              ? "bg-loss-bg text-loss border-loss-dim"
              : "bg-secondary text-muted-foreground border-border"
          }`}
        >
          {d.label} {d.pnl !== 0 ? `${d.pnl > 0 ? "+" : ""}$${d.pnl}` : "—"}
        </div>
      ))}
    </div>

    <div className="h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={weekData} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 14%)" vertical={false} />
          <XAxis
            dataKey="label"
            tick={{ fill: "hsl(220, 12%, 45%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(220, 12%, 45%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `$${v}`}
            width={48}
          />
          <ReferenceLine y={0} stroke="hsl(222, 25%, 18%)" />
          <Tooltip
            contentStyle={{
              background: "hsl(222, 40%, 6%)",
              border: "1px solid hsl(222, 25%, 18%)",
              borderRadius: 8,
              fontSize: 12,
              fontFamily: "JetBrains Mono",
            }}
            formatter={(value: number) => [`$${value}`, "P&L"]}
          />
          <Bar dataKey="pnl" radius={[4, 4, 0, 0]}>
            {weekData.map((entry, i) => (
              <Cell
                key={i}
                fill={entry.pnl >= 0 ? "hsl(152, 69%, 53%)" : "hsl(0, 84%, 60%)"}
                fillOpacity={entry.pnl === 0 ? 0.1 : 0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export default WeeklyPnL;
