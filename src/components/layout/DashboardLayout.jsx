import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "../dashboard/TopBar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f5f6fa] dark:bg-[#0d0f14]">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content — offset on lg+ to account for fixed sidebar */}
      <main className="flex-1 lg:ml-64 flex flex-col min-h-screen w-0">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
