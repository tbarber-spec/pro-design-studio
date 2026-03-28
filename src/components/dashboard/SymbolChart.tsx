import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { symbol: "BTCUSD", wins: 2, losses: 0 },
  { symbol: "NAS100", wins: 0, losses: 0 },
  { symbol: "XAUUSD", wins: 0, losses: 0 },
  { symbol: "EURUSD", wins: 0, losses: 0 },
];

const SymbolChart = () => (
  <motion.div
    className="glass-card rounded-lg p-5"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
  >
    <h3 className="text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase mb-4">
      Resultado por símbolo
    </h3>
    <div className="h-36">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 25%, 14%)" />
          <XAxis
            dataKey="symbol"
            tick={{ fill: "hsl(220, 12%, 45%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(220, 12%, 45%)", fontSize: 10, fontFamily: "JetBrains Mono" }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(222, 40%, 6%)",
              border: "1px solid hsl(222, 25%, 18%)",
              borderRadius: 8,
              fontSize: 12,
              fontFamily: "JetBrains Mono",
            }}
          />
          <Bar dataKey="wins" stackId="a" fill="hsl(152, 69%, 15%)" radius={[3, 3, 0, 0]} name="WIN" />
          <Bar dataKey="losses" stackId="a" fill="hsl(0, 62%, 30%)" radius={[3, 3, 0, 0]} name="LOSS" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export default SymbolChart;
