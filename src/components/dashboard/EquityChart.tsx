import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { time: "00:00", value: 101050 },
  { time: "02:00", value: 100980 },
  { time: "04:00", value: 101220 },
  { time: "06:00", value: 101150 },
  { time: "08:00", value: 101380 },
  { time: "10:00", value: 101310 },
  { time: "12:00", value: 101460 },
  { time: "14:00", value: 101280 },
  { time: "16:00", value: 101100 },
  { time: "18:00", value: 101050 },
  { time: "20:00", value: 101120 },
  { time: "22:00", value: 101180 },
  { time: "23:54", value: 100943 },
];

const EquityChart = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase mb-4">
      Equity curve — últimas 24hs
    </h3>
    <div className="h-36">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="eqGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="hsl(199, 89%, 48%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 14%)" />
          <XAxis
            dataKey="time"
            tick={{ fill: "hsl(220, 12%, 45%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={["dataMin - 100", "dataMax + 100"]}
            tick={{ fill: "hsl(220, 12%, 45%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) => `$${(v / 1000).toFixed(1)}k`}
            width={52}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(222, 40%, 6%)",
              border: "1px solid hsl(222, 25%, 18%)",
              borderRadius: 8,
              fontSize: 12,
              fontFamily: "JetBrains Mono",
            }}
            labelStyle={{ color: "hsl(220, 12%, 45%)" }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Equity"]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(199, 89%, 48%)"
            strokeWidth={2}
            fill="url(#eqGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export default EquityChart;
