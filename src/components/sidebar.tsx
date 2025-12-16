"use client";

import { LayoutDashboard, Compass, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Shadcn utility
// import { Button } from "@/components/ui/button";

const routes = [
  {
    label: "Browse",
    icon: Compass,
    href: "/search",
  },
  {
    label: "My Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Create Course",
    icon: PlusCircle,
    href: "/create",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <h1 className="font-bold text-2xl text-purple-600">LMS_AI</h1>
      </div>
      <div className="flex flex-col w-full">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
              pathname === route.href &&
                "text-purple-700 bg-purple-200/20 hover:bg-purple-200/20 hover:text-purple-700 border-r-4 border-purple-700"
            )}
          >
            <div className="flex items-center gap-x-2 py-4">
              <route.icon
                size={22}
                className={cn(
                  "text-slate-500",
                  pathname === route.href && "text-purple-700"
                )}
              />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
