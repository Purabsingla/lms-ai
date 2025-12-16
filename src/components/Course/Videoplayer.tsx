"use client";

import React, { useState } from "react";
import { Play, Pause, Volume2, Maximize } from "lucide-react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
      {/* Fake Video Content */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
        {!isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-purple-900/40"
          >
            <Play size={32} fill="currentColor" className="ml-1" />
          </button>
        )}
      </div>

      {/* Custom Controls (Visible on Hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="h-1 w-full bg-white/20 rounded-full mb-4 cursor-pointer">
          <div className="h-full w-1/3 bg-purple-500 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform" />
          </div>
        </div>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play size={20} fill="currentColor" />
              )}
            </button>
            <span className="text-xs font-medium">04:20 / 12:30</span>
          </div>
          <div className="flex items-center gap-4">
            <Volume2 size={20} />
            <Maximize size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
