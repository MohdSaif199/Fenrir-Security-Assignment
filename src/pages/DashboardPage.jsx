import DashboardLayout from "../components/layout/DashboardLayout";
import ScanMetaBar from "../components/dashboard/ScanMetaBar";
import SeverityCard from "../components/dashboard/SeverityCard";
import ScanTable from "../components/dashboard/ScanTable";
import { severityStats } from "../data/mockData";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Meta stats bar */}
      <ScanMetaBar />

      {/* Main content */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
        {/* Severity Cards — responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {severityStats.map((stat) => (
            <SeverityCard key={stat.type} {...stat} />
          ))}
        </div>

        {/* Scan Table */}
        <ScanTable />
      </div>
    </DashboardLayout>
  );
}
