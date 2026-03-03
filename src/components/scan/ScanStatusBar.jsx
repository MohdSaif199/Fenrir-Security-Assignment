import { scanStatusData } from "../../data/mockData";

function Item({ label, value }) {
  return (
    <span>
      <span className="text-gray-500 dark:text-gray-500">{label}: </span>
      <span className="text-gray-600 dark:text-gray-400 font-medium">{value}</span>
    </span>
  );
}

function Dot() {
  return <span className="mx-2 text-gray-300 dark:text-gray-700 select-none">•</span>;
}

export default function ScanStatusBar() {
  const {
    subAgents,
    parallelExecutions,
    operations,
    critical,
    high,
    medium,
    low,
  } = scanStatusData;

  return (
    <div
      className="sticky bottom-0 z-10 flex items-center justify-between px-4 sm:px-6 py-2 border-t text-xs
        bg-white border-gray-100
        dark:bg-[#0f1117] dark:border-[#1e2230]"
    >
      {/* Left: agent stats */}
      <div className="flex items-center flex-wrap gap-y-1">
        <Item label="Sub-Agents" value={subAgents} />
        <Dot />
        <Item label="Parallel Executions" value={parallelExecutions} />
        <Dot />
        <Item label="Operations" value={operations} />
      </div>

      {/* Right: severity counts */}
      <div className="flex items-center flex-wrap justify-end gap-y-1">
        <Item label="Critical" value={critical} />
        <Dot />
        <Item label="High" value={high} />
        <Dot />
        <Item label="Medium" value={medium} />
        <Dot />
        <Item label="Low" value={low} />
      </div>
    </div>
  );
}
