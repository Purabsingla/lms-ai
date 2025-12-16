import React from "react";
// Ensure these paths point to the files created above
import CourseSidebar from "@/components/Course/Sidebar";
import CourseNavbar from "@/components/Course/Navbar";

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar />
      </div>

      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar courseId={params.courseId} />
      </div>

      <main className="md:pl-80 pt-[80px] h-full bg-neutral-950 min-h-screen">
        {children}
      </main>
    </div>
  );
}
