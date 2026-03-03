export default function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-28 h-2 rounded-full bg-gray-200 dark:bg-gray-700/60 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${value}%`,
            background: value === 100 ? "var(--color-teal-btn)" : "#ef4444",
          }}
        />
      </div>
      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
        {value}%
      </span>
    </div>
  );
}
