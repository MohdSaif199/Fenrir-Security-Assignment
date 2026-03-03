import {
  LayoutDashboard,
  FolderOpen,
  FileChartColumnIncreasing,
  Calendar,
  Bell,
  Settings,
  Info,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const primaryNav = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Projects", icon: FolderOpen, to: "/projects" },
  { label: "Scans", icon: FileChartColumnIncreasing, to: "/scans" },
  { label: "Schedule", icon: Calendar, to: "/schedule" },
];

const secondaryNav = [
  { label: "Notifications", icon: Bell, to: "/notifications" },
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "Support", icon: Info, to: "/support" },
];

function NavItem({ icon: Icon, label, to, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer
        ${
          isActive
            ? "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400"
            : "text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-[#1e2230] dark:hover:text-gray-200"
        }`
      }
    >
      <Icon size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </NavLink>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 flex flex-col border-r transition-transform duration-300
          bg-white border-gray-200
          dark:bg-[#0f1117] dark:border-[#1e2230]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-5">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, #3fffdf, #0BBFAC)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white/80" />
          </span>
          <span className="text-gray-900 dark:text-white font-semibold text-base tracking-wide">
            aps
          </span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* Primary Nav */}
        <nav className="flex-1 px-3 space-y-1 mt-2">
          {primaryNav.map((item) => (
            <NavItem key={item.label} {...item} onClick={onClose} />
          ))}
          <br />
          <div className="border-t border-gray-100 dark:border-[#1e2230] pt-3 space-y-1">
            {secondaryNav.map((item) => (
              <NavItem key={item.label} {...item} onClick={onClose} />
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div
          className="flex items-center gap-2 px-3 py-4 border-t cursor-pointer
            border-gray-100 hover:bg-gray-50
            dark:border-[#1e2230] dark:hover:bg-[#1a1e2a]"
        >
          <img
            src="https://i.pravatar.cc/36?u=admin-edu"
            alt="Admin avatar"
            className="w-8 h-8 rounded-full object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 dark:text-gray-500 truncate">
              admin@edu.com
            </p>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Security Lead
            </p>
          </div>
          <ChevronRight
            size={14}
            className="text-gray-400 dark:text-gray-600 shrink-0"
          />
        </div>
      </aside>
    </>
  );
}
