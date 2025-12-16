import React from "react";
import {
  PlayCircle,
  Award,
  Clock,
  FileText,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

export default function CourseOverviewPage({
  params,
}: {
  params: { courseId: string };
}) {
  // Safety check: Ensure courseId exists (prevents crashes if params is undefined)
  const courseId = params?.courseId || "react-101";

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8 text-white">
      {/* HERO HEADER */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Thumbnail Area */}
        <div className="w-full md:w-96 aspect-video bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
          <PlayCircle
            size={64}
            className="text-white opacity-80 z-20 group-hover:scale-110 transition-transform"
          />
          {/* Mock Image Background Effect */}
          <div className="absolute inset-0 bg-purple-900/20" />
        </div>

        {/* Info Area */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
            <span className="px-2 py-1 bg-purple-500/10 rounded-md border border-purple-500/20">
              Development
            </span>
            <span>•</span>
            <span>Updated Last Week</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            Complete AI Masterclass: From Zero to Hero
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Master the fundamentals of Artificial Intelligence, Neural Networks,
            and Deep Learning in this comprehensive project-based course.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <Link
              href={`/course/${courseId}/chapters/intro`}
              className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <PlayCircle size={20} />
              Resume Course
            </Link>

            {/* Mock Students Avatar Stack */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-neutral-700"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400 font-medium">
                +2k students
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PROGRESS SECTION */}
      <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Your Progress</h2>
            <p className="text-sm text-gray-400">
              You are making great progress! Keep it up.
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-purple-400">40%</span>
          </div>
        </div>
        <div className="h-3 w-full bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full w-[40%] bg-linear-to-r from-purple-600 to-blue-500 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <StatBox icon={Clock} label="Time Spent" value="12h 45m" />
          <StatBox icon={FileText} label="Lessons" value="8 / 24" />
          <StatBox icon={Award} label="Certificates" value="0 / 1" />
          <StatBox icon={CheckCircle} label="Quizzes" value="3 Passed" />
        </div>
      </div>

      {/* CURRICULUM PREVIEW */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Course Curriculum</h2>
        <div className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5">
          {[
            {
              title: "Introduction to AI",
              duration: "10m",
              status: "completed",
            },
            {
              title: "Environment Setup",
              duration: "15m",
              status: "completed",
            },
            {
              title: "Neural Networks Basics",
              duration: "45m",
              status: "in-progress",
            },
            {
              title: "Advanced Patterns",
              duration: "1h 20m",
              status: "locked",
            },
            { title: "Final Project", duration: "2h 30m", status: "locked" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.status === "completed"
                      ? "bg-green-500/20 text-green-500"
                      : item.status === "locked"
                      ? "bg-neutral-800 text-gray-500"
                      : "bg-purple-500/20 text-purple-500"
                  }`}
                >
                  {item.status === "completed" ? (
                    <CheckCircle size={16} />
                  ) : item.status === "locked" ? (
                    <Award size={16} />
                  ) : (
                    <PlayCircle size={16} />
                  )}
                </div>
                <span
                  className={
                    item.status === "locked"
                      ? "text-gray-500"
                      : "text-white font-medium group-hover:text-purple-400 transition-colors"
                  }
                >
                  {item.title}
                </span>
              </div>
              <span className="text-sm text-gray-500">{item.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatBox({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-neutral-800/50 rounded-xl p-4 border border-white/5">
      <Icon className="text-purple-400 mb-2" size={20} />
      <div className="text-lg font-bold">{value}</div>
      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
}
