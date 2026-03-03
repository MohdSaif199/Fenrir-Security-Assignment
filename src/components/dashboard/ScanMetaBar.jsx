import { RefreshCw } from "lucide-react";
import { scanMeta } from "../../data/mockData";

function MetaItem({ label, value }) {
  return (
    <span className="text-sm text-gray-500 dark:text-gray-400 me-7 ms-7">
      {label}:{" "}
      <span className="font-bold text-gray-900 dark:text-white">{value}</span>
    </span>
  );
}

function Divider() {
  return (
    <span className="text-gray-300 dark:text-gray-700 select-none">|</span>
  );
}

export default function ScanMetaBar() {
  return (
    <div
      className="flex flex-wrap items-center gap-x-4 gap-y-2 px-6 py-3 border-b
        bg-white border-gray-100
        dark:bg-[#141720] dark:border-[#1e2230]"
    >
      <MetaItem label="Org" value={scanMeta.org} />
      <Divider />
      <MetaItem label="Owner" value={scanMeta.owner} />
      <Divider />
      <MetaItem label="Total Scans" value={scanMeta.totalScans} />
      <Divider />
      <MetaItem label="Scheduled" value={scanMeta.scheduled} />
      <Divider />
      <MetaItem label="Rescans" value={scanMeta.rescans} />
      <Divider />
      <MetaItem label="Failed Scans" value={scanMeta.failedScans} />
      <Divider />
      <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 ml-auto">
        <RefreshCw size={14} style={{ color: "var(--color-teal-btn)" }} />
        {scanMeta.lastUpdated}
      </span>
    </div>
  );
}
