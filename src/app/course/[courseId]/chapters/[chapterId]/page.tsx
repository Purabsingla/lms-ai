import React from "react";
// Switching to relative path to ensure resolution in preview environment
// Go up 5 levels: [chapterId] -> chapters -> [courseId] -> course -> app -> root -> components
import VideoPlayer from "@/components/Course/Videoplayer";
import { Download, FileText, MessageSquare } from "lucide-react";

export default function ChapterPage({
  params,
}: {
  params: { chapterId: string };
}) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* The Video */}
      <div className="pb-8">
        <VideoPlayer />
      </div>

      {/* Title & Actions */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            3. The Basics of AI
          </h1>
          <p className="text-gray-400">
            In this lesson, we explore the fundamental concepts of neural
            networks.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors">
          Mark as Complete
        </button>
      </div>

      {/* Resources & Description */}
      <div className="grid md:grid-cols-3 gap-8 pt-8">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-white">Description</h3>
          <div className="text-gray-400 leading-relaxed space-y-4">
            <p>
              Artificial Intelligence is transforming the world. But how does it
              actually work? We break down the black box and look at the math
              inside.
            </p>
            <p>
              You will learn about Perceptrons, Weights, Biases, and Activation
              functions. Don&apos;t worry if you aren&apos;t a math genius, we
              explain it visually!
            </p>
          </div>
        </div>

        {/* Sidebar Resources */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <div className="space-y-2">
            <ResourceItem icon={FileText} label="Lecture Slides PDF" />
            <ResourceItem icon={Download} label="Source Code" />
            <ResourceItem icon={MessageSquare} label="Community Discussion" />
          </div>
        </div>
      </div>
    </div>
  );
}

const ResourceItem = ({ icon: Icon, label }: any) => (
  <button className="w-full flex items-center gap-3 p-3 bg-neutral-900 border border-white/5 rounded-xl hover:bg-neutral-800 transition-colors text-left group">
    <Icon size={18} className="text-purple-400" />
    <span className="text-sm text-gray-300 group-hover:text-white font-medium">
      {label}
    </span>
  </button>
);
