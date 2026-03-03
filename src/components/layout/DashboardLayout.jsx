import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#f5f6fa] dark:bg-[#0d0f14]">
      <Sidebar />
      {/* Main content offset by sidebar width */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
}
