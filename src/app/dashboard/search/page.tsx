"use client";

import React from "react";
import { Search, PlayCircle, Star } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Browse Courses</h1>
        <p className="text-gray-400 text-sm">
          Find your next learning adventure.
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search for Python, React, AI..."
          className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-500"
        />
      </div>

      {/* CATEGORIES */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {["All", "Development", "Design", "Business", "Marketing", "Music"].map(
          (cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap"
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* COURSE GRID (Mock Data) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="h-40 bg-neutral-800 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <PlayCircle size={40} className="text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                Complete AI Masterclass {i}
              </h3>
              <p className="text-xs text-gray-400 line-clamp-2">
                Learn how to build advanced AI applications using the latest
                LLMs and tools.
              </p>
              <div className="flex items-center gap-1 text-yellow-400 text-xs font-medium pt-2">
                <Star size={12} fill="currentColor" />
                <span>4.8</span>
                <span className="text-gray-500 font-normal ml-1">
                  (120 students)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
