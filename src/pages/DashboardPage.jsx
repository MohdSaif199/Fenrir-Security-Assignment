import DashboardLayout from "../components/layout/DashboardLayout";
import TopBar from "../components/dashboard/TopBar";
import ScanMetaBar from "../components/dashboard/ScanMetaBar";
import SeverityCard from "../components/dashboard/SeverityCard";
import ScanTable from "../components/dashboard/ScanTable";
import { severityStats } from "../data/mockData";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Top breadcrumb bar */}
      <TopBar />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Meta stats bar */}
        <ScanMetaBar />

        {/* Main content padding */}
        <div className="p-6 space-y-5">
          {/* Severity Cards */}
          <div className="flex gap-4">
            {severityStats.map((stat) => (
              <SeverityCard key={stat.type} {...stat} />
            ))}
          </div>

          {/* Scan Table */}
          <ScanTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
