import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export const ALL_COLUMNS = [
  { key: "type", label: "Type" },
  { key: "status", label: "Status" },
  { key: "progress", label: "Progress" },
  { key: "vuln", label: "Vulnerability" },
  { key: "lastScan", label: "Last Scan" },
];

export function defaultColumns() {
  return Object.fromEntries(ALL_COLUMNS.map((c) => [c.key, true]));
}

export default function ColumnDropdown({ visibleColumns, onChange, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  function toggle(key) {
    // Keep at least one column visible besides Scan Name
    const nextVisible = { ...visibleColumns, [key]: !visibleColumns[key] };
    const visibleCount = Object.values(nextVisible).filter(Boolean).length;
    if (visibleCount === 0) return;
    onChange(nextVisible);
  }

  return (
    <div
      ref={ref}
      className="absolute top-full right-0 mt-2 w-48 z-50 rounded-xl border shadow-xl p-4
        bg-white border-gray-200
        dark:bg-[#1a1e2a] dark:border-[#2a2f42]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Columns
        </span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={14} />
        </button>
      </div>

      {/* Scan Name — always visible */}
      <label className="flex items-center gap-2.5 py-1.5 opacity-50 cursor-not-allowed">
        <input
          type="checkbox"
          checked
          readOnly
          className="w-4 h-4 rounded accent-teal-500"
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Scan Name
        </span>
      </label>

      {ALL_COLUMNS.map(({ key, label }) => (
        <label
          key={key}
          className="flex items-center gap-2.5 py-1.5 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={visibleColumns[key]}
            onChange={() => toggle(key)}
            className="w-4 h-4 rounded cursor-pointer accent-teal-500"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {label}
          </span>
        </label>
      ))}
    </div>
  );
}
