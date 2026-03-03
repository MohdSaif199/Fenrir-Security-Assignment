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
import FilterDropdown from "./FilterDropdown";
import ColumnDropdown, { defaultColumns } from "./ColumnDropdown";

const TOTAL = 100;

export default function ScanTable() {
  const [query, setQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [columnOpen, setColumnOpen] = useState(false);
  const [statusFilters, setStatusFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(defaultColumns());

  const activeFilterCount = statusFilters.length + typeFilters.length;

  const filtered = scans.filter((s) => {
    const matchesQuery =
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.type.toLowerCase().includes(query.toLowerCase()) ||
      s.status.toLowerCase().includes(query.toLowerCase());
    const matchesStatus =
      statusFilters.length === 0 || statusFilters.includes(s.status);
    const matchesType =
      typeFilters.length === 0 || typeFilters.includes(s.type);
    return matchesQuery && matchesStatus && matchesType;
  });

  const col = visibleColumns;

  return (
    <div
      className="rounded-xl border overflow-hidden
        bg-white border-gray-100
        dark:bg-[#141720] dark:border-[#1e2230]"
    >
      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-[#1e2230]">
        {/* Search */}
        <div className="relative flex-1 min-w-[300px]">
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
          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => {
                setFilterOpen((v) => !v);
                setColumnOpen(false);
              }}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border transition-colors cursor-pointer
                ${
                  activeFilterCount > 0
                    ? "border-teal-400 text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-[#1e2230] dark:text-gray-400 dark:hover:bg-[#1e2230]"
                }`}
            >
              <SlidersHorizontal size={14} />
              Filter
              {activeFilterCount > 0 && (
                <span className="ml-1 w-4 h-4 rounded-full text-xs flex items-center justify-center bg-teal-500 text-white font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
            {filterOpen && (
              <FilterDropdown
                statusFilters={statusFilters}
                typeFilters={typeFilters}
                onStatusChange={setStatusFilters}
                onTypeChange={setTypeFilters}
                onClear={() => {
                  setStatusFilters([]);
                  setTypeFilters([]);
                }}
                onClose={() => setFilterOpen(false)}
              />
            )}
          </div>

          {/* Column */}
          <div className="relative">
            <button
              onClick={() => {
                setColumnOpen((v) => !v);
                setFilterOpen(false);
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg border transition-colors cursor-pointer
                border-gray-200 text-gray-600 hover:bg-gray-50
                dark:border-[#1e2230] dark:text-gray-400 dark:hover:bg-[#1e2230]"
            >
              <Columns size={14} />
              <span className="hidden sm:inline">Column</span>
            </button>
            {columnOpen && (
              <ColumnDropdown
                visibleColumns={visibleColumns}
                onChange={setVisibleColumns}
                onClose={() => setColumnOpen(false)}
              />
            )}
          </div>

          {/* New scan */}
          <button
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 text-sm rounded-lg text-white font-medium transition-opacity hover:opacity-90 cursor-pointer"
            style={{ background: "var(--color-teal-btn)" }}
          >
            <Plus size={15} />
            <span className="hidden sm:inline">New scan</span>
          </button>
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-[#1e2230]">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                Scan Name
              </th>
              {col.type && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                  Type
                </th>
              )}
              {col.status && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                  Status
                </th>
              )}
              {col.progress && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                  Progress
                </th>
              )}
              {col.vuln && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                  Vulnerability
                </th>
              )}
              {col.lastScan && (
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                  Last Scan
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-sm text-gray-400 dark:text-gray-600"
                >
                  No scans match your filters.
                </td>
              </tr>
            ) : (
              filtered.map((scan) => (
                <tr
                  key={scan.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors
                    dark:border-[#1a1e2a] dark:hover:bg-[#1a1e2a]"
                >
                  <td className="px-4 py-3.5">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                      {scan.name}
                    </span>
                  </td>
                  {col.type && (
                    <td className="px-4 py-3.5">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {scan.type}
                      </span>
                    </td>
                  )}
                  {col.status && (
                    <td className="px-4 py-3.5">
                      <StatusBadge status={scan.status} />
                    </td>
                  )}
                  {col.progress && (
                    <td className="px-4 py-3.5">
                      <ProgressBar value={scan.progress} />
                    </td>
                  )}
                  {col.vuln && (
                    <td className="px-4 py-3.5">
                      <VulnerabilityBadges vuln={scan.vuln} />
                    </td>
                  )}
                  {col.lastScan && (
                    <td className="px-4 py-3.5">
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        {scan.lastScan}
                      </span>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-[#1e2230]">
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
