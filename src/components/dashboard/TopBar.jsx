import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div
      className="flex items-center justify-between px-6 py-3.5 border-b
        bg-white border-gray-200
        dark:bg-[#0f1117] dark:border-[#1e2230]"
    >
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm">
        <span className="text-gray-700 dark:text-gray-200 font-medium me-3">
          Scan
        </span>
        <Link
          to="/dashboard"
          className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 me-3"
        >
          <Home size={14} />
        </Link>
        <span className="text-gray-400 dark:text-gray-600 me-3">/</span>
        <span className="text-gray-500 dark:text-gray-400 me-3">
          Private Assets
        </span>
        <span className="text-gray-400 dark:text-gray-600 me-3">/</span>
        <span
          style={{ color: "var(--color-teal-btn)" }}
          className="font-medium"
        >
          New Scan
        </span>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          className="px-4 py-2 text-sm font-medium rounded-lg border transition-colors
            border-gray-300 text-gray-700 hover:bg-gray-50
            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#1e2230]"
        >
          Export Report
        </button>
        <button
          className="px-4 py-2 text-sm font-medium rounded-lg transition-colors
            bg-red-500 text-white hover:bg-red-600
            dark:bg-transparent dark:border dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500/10"
        >
          Stop Scan
        </button>
      </div>
    </div>
  );
}
