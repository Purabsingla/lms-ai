"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function CreateCoursePage() {
  return (
    <div className="h-full flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Create a course in <span className="text-purple-400">seconds</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Enter a topic, and our AI will generate the entire curriculum,
            chapters, and content for you.
          </p>
        </div>

        <div className="bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl">
          <div className="flex flex-col gap-4 text-left">
            <label className="text-sm font-medium text-gray-300 ml-1">
              What do you want to teach?
            </label>
            <input
              type="text"
              placeholder="e.g. 'Advanced Digital Marketing Strategy' or 'Intro to Guitar'"
              className="w-full bg-neutral-950 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />

            <button className="w-full py-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 group">
              <Sparkles size={20} className="group-hover:animate-pulse" />
              Generate Course
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          Powered by Gemini AI • Generates Syllabus • Chapters • Video Scripts
        </p>
      </div>
    </div>
  );
}
