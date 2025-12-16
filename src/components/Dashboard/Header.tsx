import React from "react";
import { Menu, Search, Bell } from "lucide-react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  return (
    <header className="h-16 bg-neutral-900/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-30 px-6 flex items-center justify-between">
      {/* Left Side: Toggle & Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          <Menu size={20} />
        </button>

        <div className="hidden md:flex items-center gap-2 bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-white/5 focus-within:border-purple-500/50 transition-colors">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-sm text-white w-48 placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Right Side: Notifications & Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-neutral-900" />
        </button>

        {/* Placeholder for User Button or Profile Image */}
        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full border border-white/10 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
