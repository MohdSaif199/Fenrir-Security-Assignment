import { useState } from "react";
import { ChevronUp, X } from "lucide-react";
import ActivityLog from "./ActivityLog";
import FindingCard from "./FindingCard";
import { findings } from "../../data/mockData";

const TABS = [
  { id: "activity", label: "Activity Log" },
  { id: "verification", label: "Verification Loops" },
];

export default function LiveScanConsole() {
  const [minimized, setMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="rounded-xl border overflow-hidden bg-white dark:bg-[#141720] border-gray-200 dark:border-[#1e2230]">
      {/* ── Console header ── */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-100 dark:border-[#1e2230]">
        <div className="flex items-center gap-3">
          {/* Title with live dot */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              Live Scan Console
            </span>
          </div>

          {/* Running pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-[#1e2230]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Running...
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => setMinimized((m) => !m)}
            className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1e2230] dark:hover:text-gray-300 transition-colors"
            aria-label={minimized ? "Expand console" : "Minimize console"}
          >
            <ChevronUp
              size={16}
              style={{
                transform: minimized ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </button>
          <button
            className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-[#1e2230] dark:hover:text-gray-300 transition-colors"
            aria-label="Close console"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* ── Console body ── */}
      {!minimized && (
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-[#1e2230]">
          {/* Left panel: tabs + log */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Tab bar */}
            <div className="flex border-b border-gray-100 dark:border-[#1e2230] px-4 sm:px-5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 mr-6 text-sm font-medium border-b-2 transition-colors focus:outline-none ${
                    activeTab === tab.id
                      ? "border-[#14e3c0] text-[#0bbfac]"
                      : "border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Log content */}
            <div className="p-4 sm:p-5 h-[480px] overflow-hidden">
              {activeTab === "activity" ? (
                <ActivityLog />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-600 text-sm">
                  No verification loops recorded yet.
                </div>
              )}
            </div>
          </div>

          {/* Right panel: finding log */}
          <div className="w-full lg:w-72 xl:w-80 flex flex-col shrink-0">
            {/* Header — aligned with tab bar height */}
            <div className="flex items-center px-4 sm:px-5 py-3 border-b border-gray-100 dark:border-[#1e2230] h-[49px]">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Finding Log
              </h3>
            </div>

            {/* Finding cards */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 h-[380px]">
              {findings.map((finding) => (
                <FindingCard key={finding.id} finding={finding} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
