import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hexagon, BarChart3, CalendarDays } from "lucide-react";
import TopBar from "@/components/dashboard/TopBar";
import AlertBanner from "@/components/dashboard/AlertBanner";
import AccountCard from "@/components/dashboard/AccountCard";
import PositionCard from "@/components/dashboard/PositionCard";
import DayMetricsCard from "@/components/dashboard/DayMetricsCard";
import PhaseSection from "@/components/dashboard/PhaseSection";
import EquityChart from "@/components/dashboard/EquityChart";
import SymbolChart from "@/components/dashboard/SymbolChart";
import NewsSection from "@/components/dashboard/NewsSection";
import SymbolStatus from "@/components/dashboard/SymbolStatus";
import TradeHistory from "@/components/dashboard/TradeHistory";
import BottomBar from "@/components/dashboard/BottomBar";
import HistoricalStats from "@/components/dashboard/HistoricalStats";
import AssetPerformance from "@/components/dashboard/AssetPerformance";
import WeeklyPnL from "@/components/dashboard/WeeklyPnL";
import TradingCalendar from "@/components/dashboard/TradingCalendar";
import LogViewer from "@/components/dashboard/LogViewer";
import FullTradeHistory from "@/components/dashboard/FullTradeHistory";

const tabs = [
  { id: "inicio", label: "Inicio", icon: Hexagon },
  { id: "analisis", label: "Análisis", icon: BarChart3 },
  { id: "calendario", label: "Calendario & Logs", icon: CalendarDays },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto border-x border-border min-h-screen flex flex-col">
        <TopBar />
        <AlertBanner />

        {/* Tabs */}
        <div className="flex gap-0 bg-card border-b border-border sticky top-0 z-50 px-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-5 py-3 text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-secondary-foreground"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-info"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 p-4">
          <AnimatePresence mode="wait">
            {activeTab === "inicio" && (
              <motion.div
                key="inicio"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <AccountCard />
                  <PositionCard />
                  <DayMetricsCard />
                </div>
                <PhaseSection />
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  <div className="lg:col-span-3">
                    <EquityChart />
                  </div>
                  <div className="lg:col-span-2">
                    <SymbolStatus />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <NewsSection />
                  <SymbolChart />
                </div>
                <TradeHistory />
              </motion.div>
            )}

            {activeTab === "analisis" && (
              <motion.div
                key="analisis"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <HistoricalStats />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <WeeklyPnL />
                  <EquityChart />
                </div>
                <AssetPerformance />
              </motion.div>
            )}

            {activeTab === "calendario" && (
              <motion.div
                key="calendario"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <TradingCalendar />
                <LogViewer />
                <FullTradeHistory />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <BottomBar />
      </div>
    </div>
  );
};

export default Index;
