import { Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar({ onMenuClick }) {
  return (
    <div
      className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b sticky top-0 z-20
        bg-white border-gray-200
        dark:bg-[#0f1117] dark:border-[#1e2230]"
    >
      <div className="flex items-center gap-3">
        {/* Hamburger — visible only on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-gray-500
            hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#1e2230] transition-colors"
          aria-label="Open sidebar"
        >
          <Menu size={20} />
        </button>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm flex-wrap">
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Scan
          </span>
          <span className="text-gray-400 dark:text-gray-600">/</span>
          <Link
            to="/dashboard"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <Home size={14} />
          </Link>
          <span className="text-gray-400 dark:text-gray-600">/</span>
          <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">
            Private Assets
          </span>
          <span className="text-gray-400 dark:text-gray-600 hidden sm:inline">/</span>
          <span style={{ color: "var(--color-teal-btn)" }} className="font-medium">
            New Scan
          </span>
        </nav>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          className="hidden sm:block px-4 py-2 text-sm font-medium rounded-lg border transition-colors
            border-gray-300 text-gray-700 hover:bg-gray-50
            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-[#1e2230]"
        >
          Export Report
        </button>
        <button
          className="px-3 sm:px-4 py-2 text-sm font-medium rounded-lg transition-colors
            bg-red-500 text-white hover:bg-red-600
            dark:bg-transparent dark:border dark:border-red-500 dark:text-red-400 dark:hover:bg-red-500/10"
        >
          Stop Scan
        </button>
      </div>
    </div>
  );
}
