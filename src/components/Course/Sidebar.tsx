import React from "react";
import Link from "next/link"; // Uncomment this in your real Next.js app
import { CheckCircle, Lock, PlayCircle } from "lucide-react";

// ----------------------------------

// Mock Data for the shell
const chapters = [
  {
    id: "intro",
    title: "1. Introduction to the Course",
    isCompleted: true,
    isLocked: false,
  },
  {
    id: "setup",
    title: "2. Environment Setup",
    isCompleted: true,
    isLocked: false,
  },
  {
    id: "basics",
    title: "3. The Basics of AI",
    isCompleted: false,
    isLocked: false,
  },
  {
    id: "advanced",
    title: "4. Advanced Patterns",
    isCompleted: false,
    isLocked: true,
  },
  {
    id: "project",
    title: "5. Final Project",
    isCompleted: false,
    isLocked: true,
  },
];

export default function CourseSidebar({ courseId }: { courseId: string }) {
  return (
    <div className="h-full border-r border-white/5 bg-neutral-900 flex flex-col w-full">
      <div className="p-6 border-b border-white/5">
        <h2 className="font-bold text-white mb-2">Complete AI Masterclass</h2>
        {/* Course Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-400">
            <span>40% Complete</span>
            <span>2/5 Steps</span>
          </div>
          <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full w-[40%] bg-green-500 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/course/${courseId}/chapters/${chapter.id}`}
            className={`flex items-center gap-3 p-4 text-sm transition-colors border-b border-white/5 hover:bg-white/5 ${
              chapter.id === "basics"
                ? "bg-purple-500/10 border-l-2 border-l-purple-500"
                : ""
            }`}
          >
            {/* Status Icon */}
            <div className="shrink-0">
              {chapter.isCompleted ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : chapter.isLocked ? (
                <Lock size={20} className="text-gray-600" />
              ) : (
                <PlayCircle
                  size={20}
                  className={
                    chapter.id === "basics"
                      ? "text-purple-400"
                      : "text-gray-400"
                  }
                />
              )}
            </div>

            <span
              className={chapter.isLocked ? "text-gray-500" : "text-gray-200"}
            >
              {chapter.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
