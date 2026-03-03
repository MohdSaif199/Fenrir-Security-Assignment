const SEVERITY_CONFIG = {
  critical: {
    label: "Critical",
    badgeBg: "bg-red-500",
    badgeText: "text-white",
  },
  high: {
    label: "High",
    badgeBg: "bg-orange-500",
    badgeText: "text-white",
  },
  medium: {
    label: "Medium",
    badgeBg: "bg-amber-500",
    badgeText: "text-white",
  },
  low: {
    label: "Low",
    badgeBg: "bg-blue-500",
    badgeText: "text-white",
  },
};

export default function FindingCard({ finding }) {
  const config = SEVERITY_CONFIG[finding.severity] ?? SEVERITY_CONFIG.low;

  return (
    <div className="rounded-lg border p-3 sm:p-4 bg-gray-50 dark:bg-[#0d0f14] border-gray-100 dark:border-[#1e2230]">
      {/* Header row: badge + time */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span
          className={`inline-flex px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide ${config.badgeBg} ${config.badgeText}`}
        >
          {config.label}
        </span>
        <span className="text-[11px] text-gray-400 dark:text-gray-600 font-mono shrink-0">
          {finding.time}
        </span>
      </div>

      {/* Title */}
      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1 leading-snug">
        {finding.title}
      </h4>

      {/* Path */}
      <p className="text-[11px] font-mono text-[#0bbfac] mb-2">{finding.path}</p>

      {/* Description */}
      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
        {finding.description}
      </p>
    </div>
  );
}
