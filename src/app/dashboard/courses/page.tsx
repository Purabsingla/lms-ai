"use client";

import React from "react";
import { MoreVertical, PlayCircle } from "lucide-react";

export default function MyCoursesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">My Learning</h1>

      {/* TAB SWITCHER */}
      <div className="border-b border-white/10 flex gap-6 text-sm">
        <button className="pb-3 border-b-2 border-purple-500 text-purple-400 font-medium">
          In Progress
        </button>
        <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-white transition-colors">
          Completed
        </button>
      </div>

      {/* COURSE LIST */}
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-4 bg-neutral-900 border border-white/5 p-4 rounded-xl hover:bg-neutral-800/50 transition-colors"
          >
            {/* Thumbnail */}
            <div className="w-full md:w-64 h-36 bg-neutral-800 rounded-lg flex-shrink-0 relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle
                  size={32}
                  className="text-white/50 group-hover:text-white transition-colors"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-white">
                    Advanced React Patterns
                  </h3>
                  <button className="text-gray-500 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-1">
                  Chapter 4: Composition vs Inheritance
                </p>
              </div>

              <div className="space-y-2 mt-4 md:mt-0">
                <div className="flex justify-between text-xs">
                  <span className="text-purple-300 font-medium">
                    45% Complete
                  </span>
                  <span className="text-gray-500">2h 15m remaining</span>
                </div>
                <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-purple-600 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
