import React from "react";
import Link from "next/link"; // Uncomment in real app
import { LogOut } from "lucide-react";

export default function CourseNavbar() {
  return (
    <div className="p-4 border-b border-white/5 bg-neutral-900 flex items-center justify-end h-16">
      <Link
        href="/dashboard/courses"
        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
      >
        <LogOut size={16} />
        Exit Course
      </Link>
    </div>
  );
}
