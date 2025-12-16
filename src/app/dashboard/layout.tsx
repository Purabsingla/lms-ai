"use client";

import React, { useState } from "react";
// We use relative paths here to ensure we escape the 'app' directory correctly
// to find the 'components' folder at the root.
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-purple-500/30 font-sans">
      {/* The Sidebar (Fixed) */}
      <Sidebar isOpen={sidebarOpen} />

      {/* The Main Content Area (Adjusts margin based on sidebar) */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* The Page Content Renders Here */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
