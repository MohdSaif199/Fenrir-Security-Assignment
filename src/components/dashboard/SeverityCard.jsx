import {
  Ban,
  AlertTriangle,
  Search,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const config = {
  critical: {
    icon: Ban,
    iconBg: "bg-red-100 dark:bg-red-900/20",
    iconColor: "#ef4444",
  },
  high: {
    icon: AlertTriangle,
    iconBg: "bg-orange-100 dark:bg-orange-900/20",
    iconColor: "#f97316",
  },
  medium: {
    icon: AlertTriangle,
    iconBg: "bg-yellow-100 dark:bg-yellow-900/20",
    iconColor: "#eab308",
  },
  low: {
    icon: Search,
    iconBg: "bg-blue-100 dark:bg-blue-900/20",
    iconColor: "#3b82f6",
  },
};

export default function SeverityCard({ label, value, change, trend, type }) {
  const { icon: Icon, iconBg, iconColor } = config[type];
  const isUp = trend === "up";

  return (
    <div
      className="rounded-xl px-5 py-5
        bg-white dark:bg-[#141720]
        border border-gray-100 dark:border-[#1e2230]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {label}
        </span>
        <span
          className={`flex items-center justify-center w-9 h-9 rounded-full ${iconBg}`}
        >
          <Icon size={18} color={iconColor} strokeWidth={2} />
        </span>
      </div>

      <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1.5">
        {value}
      </p>

      <div className="flex items-center gap-1">
        {isUp ? (
          <TrendingUp size={13} className="text-red-500" />
        ) : (
          <TrendingDown size={13} className="text-green-500" />
        )}
        <span
          className={`text-xs font-medium ${
            isUp ? "text-red-500" : "text-green-500"
          }`}
        >
          {change} {isUp ? "increase" : "decrease"} than yesterday
        </span>
      </div>
    </div>
  );
}
