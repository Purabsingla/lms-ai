"use client";

import React from "react";
import { Send, Sparkles, User } from "lucide-react";

export default function TutorPage() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden">
      {/* CHAT HEADER */}
      <div className="p-4 border-b border-white/5 bg-neutral-900 flex items-center gap-3">
        <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
          <Sparkles size={20} />
        </div>
        <div>
          <h2 className="font-bold text-white">AI Personal Tutor</h2>
          <p className="text-xs text-gray-400">
            Ask me anything about your courses
          </p>
        </div>
      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* AI Message */}
        <div className="flex gap-4 max-w-3xl">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0 mt-1">
            <Sparkles size={14} className="text-white" />
          </div>
          <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 text-gray-300 text-sm leading-relaxed">
            Hello! I&apos;m your personal tutor. I see you&apos;re working on
            the <strong>React Patterns</strong> course. Do you have any
            questions about <em>Composition</em>?
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-4 max-w-3xl ml-auto flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shrink-0 mt-1">
            <User size={14} className="text-white" />
          </div>
          <div className="bg-purple-600 text-white rounded-2xl rounded-tr-none p-4 text-sm leading-relaxed">
            Can you explain why we use composition instead of inheritance?
          </div>
        </div>
      </div>

      {/* INPUT AREA */}
      <div className="p-4 bg-neutral-900 border-t border-white/5">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask a question..."
            className="w-full bg-neutral-950 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-500 transition-colors">
            <Send size={16} />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-500 mt-2">
          AI can make mistakes. Double check important info.
        </p>
      </div>
    </div>
  );
}
