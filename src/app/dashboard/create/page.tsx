"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import axios from "axios";

interface Chapter {
  title: string;
  youtubeSearchQuery: string;
}

interface Module {
  title: string;
  chapters: Chapter[];
}

interface Course {
  courseTitle: string;
  summary: string;
  modules: Module[];
}

export default function CreateCoursePage() {
  const [topic, setTopic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [course, setCourse] = useState<Course | null>(null);

  const handleGenerate = async () => {
    if (!topic) return;
    setCourse(null);
    setLoading(true);
    try {
      const res = await axios.post("/api/generate", { topic });
      console.log(res.data);
      setCourse(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    console.log(course);
  };

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
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. 'Advanced Digital Marketing Strategy' or 'Intro to Guitar'"
              className="w-full bg-neutral-950 border border-white/10 rounded-xl p-4 text-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />

            <button
              disabled={loading}
              onClick={handleGenerate}
              className="w-full py-4 bg-linear-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2 group"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={20} className="group-hover:animate-pulse" />
                  Generate Course
                </>
              )}
            </button>
          </div>
        </div>

        {course && (
          <div className="text-left space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
            {/* Course Summary Card */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-2">
                {course.courseTitle}
              </h2>
              <p className="text-gray-400 leading-relaxed">{course.summary}</p>
            </div>

            {/* Modules List */}
            <div className="space-y-4">
              {course.modules?.map((module: Module, idx: number) => (
                <div
                  key={idx}
                  className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="bg-neutral-950/50 p-4 border-b border-white/10">
                    <h3 className="font-semibold text-lg text-white">
                      Module {idx + 1}: {module.title}
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {module.chapters?.map((chapter: Chapter, cIdx: number) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="shrink-0 w-6 h-6 flex items-center justify-center bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold mt-0.5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                          {cIdx + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-200">
                            {chapter.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 font-mono">
                            Query: {chapter.youtubeSearchQuery}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500">
          Powered by Gemini AI • Generates Syllabus • Chapters • Video Scripts
        </p>
      </div>
    </div>
  );
}
