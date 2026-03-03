import DashboardLayout from "../components/layout/DashboardLayout";
import ScanProgressCard from "../components/scan/ScanProgressCard";
import LiveScanConsole from "../components/scan/LiveScanConsole";
import ScanStatusBar from "../components/scan/ScanStatusBar";

export default function ScanPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-full">
        {/* Main scrollable content */}
        <div className="flex-1 p-4 sm:p-5 space-y-4">
          <ScanProgressCard />
          <LiveScanConsole />
        </div>

        {/* Sticky status bar at the bottom */}
        <ScanStatusBar />
      </div>
    </DashboardLayout>
  );
}
