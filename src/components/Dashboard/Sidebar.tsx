"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Compass, // Browse
  PlusCircle, // Create
  BookOpen, // My Courses
  BrainCircuit, // AI Tutor
  Settings,
} from "lucide-react";

// --- MOCK COMPONENTS FOR PREVIEW ---
// In your real app, remove these and use the imports above
// const Link = ({ href, children, className }: any) => (
//   <a href={href} className={className}>
//     {children}
//   </a>
// );
// const usePathname = () => "/dashboard"; // Simulating current path
// -----------------------------------

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathname = usePathname();

  // Helper to check if a link is active
  // Checks if the current URL exactly matches the link or starts with it (for sub-pages)
  const isActive = (path: string) =>
    pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-neutral-900 border-r border-white/5 transition-all duration-300 z-40 ${
        isOpen ? "w-64" : "w-20 hidden md:flex"
      } flex flex-col`}
    >
      {/* 1. LOGO */}
      <div className="h-16 flex items-center justify-center border-b border-white/5">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
            <BrainCircuit size={20} />
          </div>
          {isOpen && <span>LMS AI</span>}
        </div>
      </div>

      {/* 2. NAVIGATION LINKS */}
      <nav className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto">
        {/* Main Dashboard */}
        <NavItem
          icon={LayoutDashboard}
          label="Dashboard"
          href="/dashboard"
          active={pathname === "/dashboard"}
          isOpen={isOpen}
        />

        {/* Browse / Search */}
        <NavItem
          icon={Compass}
          label="Browse"
          href="/dashboard/search"
          active={isActive("/dashboard/search")}
          isOpen={isOpen}
        />

        {/* My Courses */}
        <NavItem
          icon={BookOpen}
          label="My Courses"
          href="/dashboard/courses"
          active={isActive("/dashboard/courses")}
          isOpen={isOpen}
        />

        {/* AI Tutor */}
        <NavItem
          icon={BrainCircuit}
          label="AI Tutor"
          href="/dashboard/tutor"
          active={isActive("/dashboard/tutor")}
          isOpen={isOpen}
        />

        {/* CREATE (Special Separator) */}
        <div className="my-2 border-t border-white/5 pt-2">
          <NavItem
            icon={PlusCircle}
            label="Create Course"
            href="/dashboard/create"
            active={isActive("/dashboard/create")}
            isOpen={isOpen}
            isSpecial
          />
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <NavItem
            icon={Settings}
            label="Settings"
            href="/dashboard/settings"
            active={isActive("/dashboard/settings")}
            isOpen={isOpen}
          />
        </div>
      </nav>
    </aside>
  );
};

// --- Sub-Component for individual links ---
function NavItem({
  icon: Icon,
  label,
  href,
  active = false,
  isOpen,
  isSpecial = false,
}: any) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all group w-full ${
        active
          ? "bg-purple-600 text-white shadow-lg shadow-purple-900/20"
          : isSpecial
          ? "bg-white/5 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 border border-purple-500/20"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon
        size={20}
        className={
          active
            ? "text-white"
            : isSpecial
            ? "text-purple-400"
            : "text-gray-400 group-hover:text-white"
        }
      />
      {isOpen && (
        <span className="text-sm font-medium whitespace-nowrap">{label}</span>
      )}
    </Link>
  );
}

export default Sidebar;
