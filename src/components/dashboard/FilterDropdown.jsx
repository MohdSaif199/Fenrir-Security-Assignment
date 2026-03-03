import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const STATUSES = ["Completed", "Scheduled", "Failed"];
const TYPES = ["Greybox", "Blackbox"];

function CheckItem({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2.5 py-1.5 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded cursor-pointer accent-teal-500"
      />
      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {label}
      </span>
    </label>
  );
}

export default function FilterDropdown({
  statusFilters,
  typeFilters,
  onStatusChange,
  onTypeChange,
  onClear,
  onClose,
}) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  function toggleStatus(s) {
    onStatusChange(
      statusFilters.includes(s)
        ? statusFilters.filter((x) => x !== s)
        : [...statusFilters, s],
    );
  }

  function toggleType(t) {
    onTypeChange(
      typeFilters.includes(t)
        ? typeFilters.filter((x) => x !== t)
        : [...typeFilters, t],
    );
  }

  const hasFilters = statusFilters.length > 0 || typeFilters.length > 0;

  return (
    <div
      ref={ref}
      className="absolute top-full right-0 mt-2 w-52 z-50 rounded-xl border shadow-xl p-4
        bg-white border-gray-200
        dark:bg-[#1a1e2a] dark:border-[#2a2f42]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Filter by
        </span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={14} />
        </button>
      </div>

      {/* Status */}
      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
        Status
      </p>
      {STATUSES.map((s) => (
        <CheckItem
          key={s}
          label={s}
          checked={statusFilters.includes(s)}
          onChange={() => toggleStatus(s)}
        />
      ))}

      <hr className="my-3 border-gray-100 dark:border-[#2a2f42]" />

      {/* Type */}
      <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
        Type
      </p>
      {TYPES.map((t) => (
        <CheckItem
          key={t}
          label={t}
          checked={typeFilters.includes(t)}
          onChange={() => toggleType(t)}
        />
      ))}

      {/* Actions */}
      {hasFilters && (
        <>
          <hr className="my-3 border-gray-100 dark:border-[#2a2f42]" />
          <button
            onClick={onClear}
            className="w-full py-1.5 text-xs font-medium rounded-lg text-red-500 border border-red-200
              hover:bg-red-50 dark:border-red-800/40 dark:hover:bg-red-900/10 transition-colors"
          >
            Clear filters
          </button>
        </>
      )}
    </div>
  );
}
