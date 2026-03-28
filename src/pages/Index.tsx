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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1440px] mx-auto border-x border-border min-h-screen flex flex-col">
        <TopBar />
        <AlertBanner />

        <div className="flex-1 p-4 space-y-4">
          {/* Top 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AccountCard />
            <PositionCard />
            <DayMetricsCard />
          </div>

          {/* Phase */}
          <PhaseSection />

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3">
              <EquityChart />
            </div>
            <div className="lg:col-span-2">
              <SymbolChart />
            </div>
          </div>

          {/* News + Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NewsSection />
            <SymbolStatus />
          </div>

          {/* History */}
          <TradeHistory />
        </div>

        <BottomBar />
      </div>
    </div>
  );
};

export default Index;
