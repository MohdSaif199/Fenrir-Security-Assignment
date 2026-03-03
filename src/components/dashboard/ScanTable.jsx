import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Columns,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { scans } from "../../data/mockData";
import StatusBadge from "./StatusBadge";
import VulnerabilityBadges from "./VulnerabilityBadges";
import ProgressBar from "./ProgressBar";

const TOTAL = 100;

export default function ScanTable() {
  const [query, setQuery] = useState("");

  const filtered = scans.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.type.toLowerCase().includes(query.toLowerCase()) ||
      s.status.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div
      className="rounded-xl border overflow-hidden
        bg-white border-gray-100
        dark:bg-[#141720] dark:border-[#1e2230]"
    >
      {/* Toolbar */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b
          border-gray-100 dark:border-[#1e2230]"
      >
        {/* Search */}
        <div className="flex-1 relative max-w-md">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search scans by name or type..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border outline-none transition-colors
              bg-gray-50 border-gray-200 text-gray-700 placeholder-gray-400 focus:border-gray-300
              dark:bg-[#0d0f14] dark:border-[#1e2230] dark:text-gray-200 dark:placeholder-gray-600 dark:focus:border-gray-600"
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border transition-colors
              border-gray-200 text-gray-600 hover:bg-gray-50
              dark:border-[#1e2230] dark:text-gray-400 dark:hover:bg-[#1e2230]"
          >
            <SlidersHorizontal size={14} />
            Filter
          </button>
          <button
            className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border transition-colors
              border-gray-200 text-gray-600 hover:bg-gray-50
              dark:border-[#1e2230] dark:text-gray-400 dark:hover:bg-[#1e2230]"
          >
            <Columns size={14} />
            Column
          </button>
          <button
            className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg text-white font-medium transition-opacity hover:opacity-90"
            style={{ background: "var(--color-teal-btn)" }}
          >
            <Plus size={15} />
            New scan
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 dark:border-[#1e2230]">
              {[
                "Scan Name",
                "Type",
                "Status",
                "Progress",
                "Vulnerability",
                "Last Scan",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((scan, i) => (
              <tr
                key={scan.id}
                className={`border-b transition-colors
                  ${i % 2 === 0 ? "" : ""}
                  border-gray-50 hover:bg-gray-50
                  dark:border-[#1a1e2a] dark:hover:bg-[#1a1e2a]`}
              >
                <td className="px-4 py-3.5">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {scan.name}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {scan.type}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <StatusBadge status={scan.status} />
                </td>
                <td className="px-4 py-3.5">
                  <ProgressBar value={scan.progress} />
                </td>
                <td className="px-4 py-3.5">
                  <VulnerabilityBadges vuln={scan.vuln} />
                </td>
                <td className="px-4 py-3.5">
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    {scan.lastScan}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-3 border-t
          border-gray-100 dark:border-[#1e2230]"
      >
        <span className="text-xs text-gray-400 dark:text-gray-500">
          Showing {filtered.length} of {TOTAL} Scans
        </span>
        <div className="flex items-center gap-1">
          <button
            className="flex items-center justify-center w-7 h-7 rounded border transition-colors
              border-gray-200 text-gray-500 hover:bg-gray-50
              dark:border-[#1e2230] dark:text-gray-500 dark:hover:bg-[#1e2230]"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            className="flex items-center justify-center w-7 h-7 rounded border transition-colors
              border-gray-200 text-gray-500 hover:bg-gray-50
              dark:border-[#1e2230] dark:text-gray-500 dark:hover:bg-[#1e2230]"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
