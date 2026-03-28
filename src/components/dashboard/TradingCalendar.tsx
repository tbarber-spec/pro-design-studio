import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DAY_HEADERS = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"];

// Mock calendar data
const calendarData: Record<number, { pnl: number; trades: number; wr: string; rows: { time: string; symbol: string; dir: string; rr: string; profit: number }[] }> = {
  3: { pnl: 420, trades: 3, wr: "67%", rows: [
    { time: "09:15", symbol: "BTCUSD", dir: "BUY", rr: "1:2.1", profit: 280 },
    { time: "14:30", symbol: "XAUUSD", dir: "SELL", rr: "1:1.8", profit: 220 },
    { time: "16:45", symbol: "EURUSD", dir: "BUY", rr: "1:1.5", profit: -80 },
  ]},
  5: { pnl: -180, trades: 2, wr: "0%", rows: [
    { time: "10:20", symbol: "NAS100", dir: "SELL", rr: "1:0.8", profit: -120 },
    { time: "15:00", symbol: "BTCUSD", dir: "SELL", rr: "1:0.6", profit: -60 },
  ]},
  8: { pnl: 680, trades: 4, wr: "75%", rows: [
    { time: "08:00", symbol: "BTCUSD", dir: "BUY", rr: "1:3.2", profit: 540 },
    { time: "11:15", symbol: "XAUUSD", dir: "BUY", rr: "1:2.0", profit: 200 },
    { time: "13:45", symbol: "EURUSD", dir: "SELL", rr: "1:1.2", profit: 80 },
    { time: "16:30", symbol: "NAS100", dir: "BUY", rr: "1:0.5", profit: -140 },
  ]},
  12: { pnl: 310, trades: 2, wr: "100%", rows: [
    { time: "09:30", symbol: "BTCUSD", dir: "SELL", rr: "1:2.5", profit: 190 },
    { time: "14:00", symbol: "XAUUSD", dir: "BUY", rr: "1:1.8", profit: 120 },
  ]},
  15: { pnl: -95, trades: 1, wr: "0%", rows: [
    { time: "10:45", symbol: "EURUSD", dir: "BUY", rr: "1:0.7", profit: -95 },
  ]},
  18: { pnl: 520, trades: 3, wr: "67%", rows: [
    { time: "08:30", symbol: "BTCUSD", dir: "BUY", rr: "1:3.0", profit: 450 },
    { time: "12:00", symbol: "NAS100", dir: "SELL", rr: "1:1.5", profit: 150 },
    { time: "15:15", symbol: "XAUUSD", dir: "BUY", rr: "1:0.4", profit: -80 },
  ]},
  21: { pnl: 140, trades: 2, wr: "50%", rows: [
    { time: "09:00", symbol: "BTCUSD", dir: "SELL", rr: "1:2.8", profit: 340 },
    { time: "14:30", symbol: "EURUSD", dir: "BUY", rr: "1:0.3", profit: -200 },
  ]},
};

const TradingCalendar = () => {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  const today = now.getDate();
  const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();

  const prevMonth = () => {
    if (month === 0) { setYear(year - 1); setMonth(11); }
    else setMonth(month - 1);
    setSelectedDay(null);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(year + 1); setMonth(0); }
    else setMonth(month + 1);
    setSelectedDay(null);
  };

  const totalPnl = Object.values(calendarData).reduce((s, d) => s + d.pnl, 0);
  const totalTrades = Object.values(calendarData).reduce((s, d) => s + d.trades, 0);

  const selected = selectedDay ? calendarData[selectedDay] : null;

  return (
    <motion.div
      className="glass-card rounded-lg p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <Calendar className="w-4 h-4 text-primary" />
        <button onClick={prevMonth} className="p-1 rounded hover:bg-secondary transition-colors">
          <ChevronLeft className="w-4 h-4 text-secondary-foreground" />
        </button>
        <span className="text-sm font-bold text-foreground">
          {MONTH_NAMES[month]} {year}
        </span>
        <button onClick={nextMonth} className="p-1 rounded hover:bg-secondary transition-colors">
          <ChevronRight className="w-4 h-4 text-secondary-foreground" />
        </button>
        <div className="ml-auto flex gap-4 text-xs">
          <span className="text-muted-foreground">
            P&L: <span className={`font-mono font-bold ${totalPnl >= 0 ? "text-profit" : "text-loss"}`}>
              {totalPnl >= 0 ? "+" : ""}${totalPnl}
            </span>
          </span>
          <span className="text-muted-foreground">
            Trades: <span className="font-mono font-bold text-foreground">{totalTrades}</span>
          </span>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAY_HEADERS.map((d) => (
          <div key={d} className="text-center text-[10px] font-bold tracking-wider text-muted-foreground py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDow }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const data = calendarData[day];
          const isToday = isCurrentMonth && day === today;
          const isSelected = day === selectedDay;

          return (
            <button
              key={day}
              onClick={() => data && setSelectedDay(isSelected ? null : day)}
              className={`rounded-md p-1.5 min-h-[52px] flex flex-col items-center gap-0.5 border transition-all text-left ${
                isSelected
                  ? "border-warning bg-warning-bg"
                  : isToday
                  ? "border-info bg-info-bg"
                  : data
                  ? data.pnl >= 0
                    ? "border-transparent bg-profit/5 hover:border-profit-dim"
                    : "border-transparent bg-loss/5 hover:border-loss-dim"
                  : "border-transparent hover:bg-secondary"
              }`}
            >
              <span className="text-[11px] text-muted-foreground font-medium">{day}</span>
              {data && (
                <>
                  <span
                    className={`text-[11px] font-bold font-mono tabular-nums ${
                      data.pnl >= 0 ? "text-profit" : "text-loss"
                    }`}
                  >
                    {data.pnl >= 0 ? "+" : ""}${data.pnl}
                  </span>
                  <span className="text-[9px] text-muted-foreground">{data.trades}t</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      {/* Day detail */}
      <AnimatePresence>
        {selected && selectedDay && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-background rounded-lg border border-border overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
                <span className="text-sm font-bold text-foreground">
                  {selectedDay} {MONTH_NAMES[month]}
                </span>
                <span
                  className={`ml-auto text-lg font-bold font-mono tabular-nums ${
                    selected.pnl >= 0 ? "text-profit" : "text-loss"
                  }`}
                >
                  {selected.pnl >= 0 ? "+" : ""}${selected.pnl}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-3 text-center">
                <div>
                  <div className="text-[10px] text-muted-foreground">Trades</div>
                  <div className="text-sm font-bold font-mono">{selected.trades}</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Win Rate</div>
                  <div className="text-sm font-bold font-mono">{selected.wr}</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Mejor</div>
                  <div className="text-sm font-bold font-mono text-profit">
                    +${Math.max(...selected.rows.map((r) => r.profit))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-muted-foreground">Peor</div>
                  <div className="text-sm font-bold font-mono text-loss">
                    ${Math.min(...selected.rows.map((r) => r.profit))}
                  </div>
                </div>
              </div>

              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    {["Hora", "Par", "Dir", "RR", "Profit"].map((h) => (
                      <th key={h} className="text-left py-1.5 px-2 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selected.rows.map((r, i) => (
                    <tr key={i} className="border-b border-border/30">
                      <td className="py-2 px-2 font-mono text-muted-foreground">{r.time}</td>
                      <td className="py-2 px-2 font-semibold">{r.symbol}</td>
                      <td className="py-2 px-2">
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            r.dir === "BUY" ? "bg-profit-dim text-profit" : "bg-loss-dim text-loss"
                          }`}
                        >
                          {r.dir}
                        </span>
                      </td>
                      <td className="py-2 px-2 font-mono">{r.rr}</td>
                      <td className={`py-2 px-2 font-mono font-medium ${r.profit >= 0 ? "text-profit" : "text-loss"}`}>
                        {r.profit >= 0 ? "+" : ""}${r.profit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TradingCalendar;
