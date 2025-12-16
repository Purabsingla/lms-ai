"use client";

import React from "react";
import {
  BookOpen,
  Clock,
  BrainCircuit,
  Trophy,
  PlayCircle,
  MoreVertical,
  Star,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Student Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">
            Your AI Tutor has curated{" "}
            <span className="text-purple-400 font-medium">3 new modules</span>{" "}
            for you today.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">
            Last synced: Just now
          </span>
        </div>
      </div>

      {/* 1. LMS Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Courses in Progress"
          value="4"
          subtitle="2 due this week"
          icon={BookOpen}
          color="bg-blue-500/10 text-blue-500"
        />
        <StatCard
          title="Study Hours"
          value="32.5"
          subtitle="+4.5h from last week"
          icon={Clock}
          color="bg-purple-500/10 text-purple-500"
        />
        <StatCard
          title="AI Interactions"
          value="128"
          subtitle="98% helpfulness rating"
          icon={BrainCircuit}
          color="bg-pink-500/10 text-pink-500"
        />
        <StatCard
          title="Avg. Quiz Score"
          value="88%"
          subtitle="Top 10% of class"
          icon={Trophy}
          color="bg-yellow-500/10 text-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: Current Learning & AI Insight (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Continue Learning Card */}
          <div className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-semibold text-lg text-white">
                Continue Learning
              </h3>
              <button className="text-sm text-purple-400 hover:text-purple-300">
                View Schedule
              </button>
            </div>

            {/* Active Course Item */}
            <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-white/5 transition-colors">
              <div className="w-full md:w-48 h-32 bg-neutral-800 rounded-xl relative group cursor-pointer overflow-hidden">
                {/* Placeholder for Course Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <PlayCircle
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-80 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <div className="absolute bottom-2 left-2 text-xs font-bold text-white bg-purple-600 px-2 py-1 rounded">
                  Resume
                </div>
              </div>
              <div className="flex-1 space-y-3 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Advanced Machine Learning Patterns
                    </h4>
                    <p className="text-sm text-gray-400">
                      Module 4: Neural Networks & Deep Learning
                    </p>
                  </div>
                  <button className="text-gray-500 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-purple-300">65% Complete</span>
                    <span className="text-gray-500">24m remaining</span>
                  </div>
                  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Analysis Chart Area */}
          <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <BrainCircuit size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">
                  AI Skill Analysis
                </h3>
                <p className="text-xs text-gray-400">
                  Your proficiency growth over the last 30 days
                </p>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-4 px-2">
              {/* Mock Chart for Skills */}
              {[
                { label: "Python", h: "80%" },
                { label: "React", h: "60%" },
                { label: "Data", h: "90%" },
                { label: "Design", h: "40%" },
                { label: "Testing", h: "70%" },
                { label: "DevOps", h: "50%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer"
                >
                  <div className="w-full bg-neutral-800 rounded-t-lg relative overflow-hidden h-48">
                    <div
                      style={{ height: item.h }}
                      className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600/80 to-purple-500/20 rounded-t-lg group-hover:bg-purple-500 transition-colors"
                    />
                  </div>
                  <span className="text-xs text-gray-500 text-center group-hover:text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Recommended & Leaderboard (1/3 width) */}
        <div className="space-y-6">
          {/* AI Recommended Card */}
          <div className="bg-gradient-to-b from-purple-900/20 to-neutral-900 border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
              <h3 className="font-bold text-white">Recommended for you</h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Based on your recent quiz results, the AI suggests reviewing these
              topics:
            </p>
            <div className="space-y-3">
              {[
                "Closures in JavaScript",
                "React useEffect Hooks",
                "CSS Grid Layouts",
              ].map((topic, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/30 cursor-pointer transition-all group"
                >
                  <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                    {topic}
                  </span>
                  <PlayCircle
                    size={16}
                    className="text-gray-500 group-hover:text-purple-400"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Assignments List */}
          <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6">
            <h3 className="font-semibold text-lg text-white mb-4">
              Upcoming Due Dates
            </h3>
            <div className="space-y-4">
              {[
                { title: "UX Case Study", due: "Tomorrow", tag: "Design" },
                { title: "Algorithm Quiz", due: "In 3 days", tag: "CompSci" },
                {
                  title: "Final Project Draft",
                  due: "Next Week",
                  tag: "Product",
                },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {task.due} • {task.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Helper
function StatCard({ title, value, subtitle, icon: Icon, color }: any) {
  return (
    <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon size={24} />
        </div>
      </div>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}
