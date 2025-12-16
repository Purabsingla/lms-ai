"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  BarChart3,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MonitorPlay,
  BrainCircuit,
  Sparkles,
  LucideIcon,
  Globe,
  Zap,
  Shield,
  Search,
  Cpu,
  Database,
  GraduationCap,
} from "lucide-react";

// --- IMPORTS COMMENTED OUT FOR PREVIEW ENVIRONMENT ---
import { AuroraHero } from "@/components/aurora-hero-bg";
import Navbar from "@/components/navbar";

// --- 0. GLOBAL STYLES FOR ANIMATIONS (Injected for portability) ---
const GlobalStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @keyframes aurora {
      from { background-position: 50% 50%, 50% 50%; }
      to { background-position: 350% 50%, 350% 50%; }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-aurora {
      animation: aurora 60s linear infinite;
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 15s ease infinite;
    }
    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `,
    }}
  />
);

// --- 2. UI COMPONENTS ---

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
    <Sparkles size={12} className="text-blue-400" />
    {children}
  </span>
);

const variants = {
  primary:
    "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
  ghost: "text-gray-400 hover:text-white",
};
type VariantKey = keyof typeof variants;
const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
}: {
  children?: React.ReactNode;
  variant?: VariantKey;
  className?: string;
  icon?: LucideIcon;
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden";

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
      {Icon && (
        <Icon
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      )}
    </button>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
      <BrainCircuit size={18} />
    </div>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
      LMS_AI
    </span>
  </div>
);

// --- 3. SECTIONS ---

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden z-10">
      {/* Pass styles to the locally defined AuroraHero */}
      <AuroraHero className="absolute inset-0 z-0 h-full w-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge>V1.0 is now live</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Master Any Skill. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-gradient-x">
            Just Type It.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          The world&apos;s first AI Course Generator. Type &quot;React&quot; or
          &quot;Quantum Physics&quot; and get a tailored curriculum, videos, and
          quizzes in 30 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
        >
          <Button icon={ArrowRight}>Generate Course</Button>
          <Button variant="secondary" icon={Play}>
            Watch Demo
          </Button>
        </motion.div>

        {/* 3D Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 100 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="w-full mt-16 relative perspective-1000"
        >
          <div className="relative mx-auto border border-white/10 bg-black/50 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden aspect-[16/9] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none" />

            {/* Mockup UI Content */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-64 border-r border-white/5 p-6 hidden md:flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 mb-4 animate-pulse" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-4 bg-white/5 rounded w-full" />
                  ))}
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                </div>
                <div className="mt-auto space-y-2">
                  <div className="h-8 bg-blue-500/20 rounded-lg w-full flex items-center px-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse mr-2"></div>
                    <div className="h-2 w-16 bg-blue-400/20 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  {/* Fake Search Bar */}
                  <div className="h-10 w-full max-w-md bg-white/5 border border-white/10 rounded-lg flex items-center px-4 gap-3">
                    <Search size={16} className="text-gray-500" />
                    <div className="h-2 w-32 bg-gray-700/50 rounded"></div>
                  </div>
                  <div className="h-8 w-8 bg-blue-500/20 rounded-full flex items-center justify-center ml-4">
                    <span className="text-blue-400 text-xs font-bold">AI</span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group/card"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      {/* Simulate content loading lines */}
                      <div className="absolute bottom-3 left-3 right-3 space-y-2">
                        <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                      </div>
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <Play
                            size={12}
                            className="fill-white text-white ml-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Section */}
                <div className="mt-auto h-auto bg-white/5 rounded-xl border border-white/5 p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-400">
                        Course Progress
                      </span>
                      <span className="text-xs text-white font-mono">78%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          </div>

          {/* Glow underneath */}
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10 rounded-[50%]" />
        </motion.div>
      </div>
    </div>
  );
};

const SocialProof = () => {
  return (
    <div className="w-full bg-transparent py-12 border-y border-white/5 overflow-hidden relative z-10 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by 10,000+ Students from
        </p>
      </div>
      <div className="flex gap-16 animate-marquee whitespace-nowrap hover:pause">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex gap-16 items-center min-w-full justify-around"
          >
            {[
              "MIT",
              "Stanford",
              "Harvard",
              "Google",
              "Amazon",
              "Microsoft",
              "OpenAI",
            ].map((logo) => (
              <span
                key={logo}
                className="text-2xl font-bold text-gray-600 hover:text-white transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <section id="features" className="py-32 bg-transparent px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Everything you need to{" "}
            <span className="text-blue-500">master anything.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stop searching for playlists. Start learning with a structured,
            AI-generated path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-[800px] md:h-[600px]">
          {/* Card 1: AI Syllabus */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                <BrainCircuit />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                AI Syllabus
              </h3>
              <p className="text-gray-400 mb-8">
                Prompt to curriculum in seconds. JSON structured learning paths.
              </p>

              <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-4 font-mono text-xs text-green-400 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                <p>{`{`}</p>
                <p className="pl-4">{`"topic": "Advanced React",`}</p>
                <p className="pl-4">{`"modules": [`}</p>
                <p className="pl-8">{`"Hooks Deep Dive",`}</p>
                <p className="pl-8">{`"Performance Optimization",`}</p>
                <p className="pl-8">{`"Server Components"`}</p>
                <p className="pl-4">{`]`}</p>
                <p>{`}`}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: YouTube Integration */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-md relative overflow-hidden group flex flex-col md:flex-row items-center gap-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6">
                <MonitorPlay />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Auto-Curated Video
              </h3>
              <p className="text-gray-400">
                We scan thousands of tutorials to find the highest-rated, most
                relevant content for your specific module.
              </p>
            </div>
            <div className="flex-1 w-full aspect-video bg-neutral-800 rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="fill-white text-white ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Analytics */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <BarChart3 />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Analytics</h3>
              <p className="text-gray-400">Track streaks and XP.</p>
            </div>
          </motion.div>

          {/* Card 4: Quiz Mode */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6">
                  <CheckCircle2 />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Quiz Mode
                </h3>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <div className="text-4xl font-bold text-white">A+</div>
                <div className="text-sm text-gray-500">
                  Mastery <br />
                  Achieved
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Define Topic",
      desc: "Simply input what you want to learn. From 'Medieval History' to 'Advanced Python'.",
    },
    {
      num: "02",
      icon: Cpu,
      title: "AI Analysis",
      desc: "Our engine deconstructs the topic into a semantic tree of core concepts and prerequisites.",
    },
    {
      num: "03",
      icon: Database,
      title: "Fetch Resources",
      desc: "We verify and scrape high-quality video tutorials and documentation from trusted sources.",
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Start Learning",
      desc: "Follow the structured path, track your progress, and validate knowledge with auto-generated quizzes.",
    },
  ];

  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            From Prompt to Pro
          </h2>
          <p className="text-gray-400 text-lg">
            Your journey to mastery, simplified.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-blue-500/50 hover:to-blue-600/5 transition-all duration-500"
            >
              <div className="h-full bg-neutral-950/90 backdrop-blur-xl rounded-[22px] p-8 relative overflow-hidden border border-white/5">
                {/* Background Gradient Blob */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/40 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-500/50">
                      <step.icon size={24} />
                    </div>
                    <span className="text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  features,
  recommended = false,
}: {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}) => (
  <div
    className={`p-8 rounded-3xl border ${
      recommended
        ? "border-blue-500/50 bg-blue-900/20"
        : "border-white/10 bg-neutral-900/30"
    } relative flex flex-col gap-6 backdrop-blur-md`}
  >
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/50">
        MOST POPULAR
      </div>
    )}
    <div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="flex items-baseline gap-1 mt-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-500">/mo</span>
      </div>
    </div>
    <ul className="space-y-4 flex-1">
      {features.map((feat, i) => (
        <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
          <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
          {feat}
        </li>
      ))}
    </ul>
    <Button variant={recommended ? "primary" : "secondary"} className="w-full">
      Choose {title}
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-32 bg-transparent px-6 relative overflow-hidden z-10"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[128px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Invest in your brain
          </h2>
          <p className="text-gray-400">
            Cheaper than a single college textbook.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Free"
            price="$0"
            features={["1 Generated Course", "Basic Quizzes", "Public Support"]}
          />
          <PricingCard
            title="Pro"
            price="$15"
            features={[
              "Unlimited Courses",
              "GPT-4 Model Access",
              "Certificate of Completion",
              "Advanced Analytics",
            ]}
            recommended
          />
          <PricingCard
            title="Team"
            price="$49"
            features={[
              "5 Team Seats",
              "Admin Dashboard",
              "SSO Integration",
              "Priority Support",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is the curriculum accurate?",
      a: "Yes. We use the latest GPT-4 models grounded with real-time search to ensure up-to-date and factual learning paths.",
    },
    {
      q: "Can I export my certificate?",
      a: "Absolutely. Pro users can export a verified PDF certificate to share on LinkedIn.",
    },
    {
      q: "Do you offer student discounts?",
      a: "Yes! Email us with your .edu address for 50% off the Pro plan.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 bg-transparent px-6 border-t border-white/5 relative z-10"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Questions?
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl bg-neutral-900/30 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronDown
                  className={`text-gray-500 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10 bg-black/80 backdrop-blur-md relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <Logo />
      <div className="text-gray-500 text-sm">
        © 2025 LMS_AI Inc. Built for the future.
      </div>
      <div className="flex gap-6">
        {["Twitter", "GitHub", "Discord"].map((social) => (
          <a
            key={social}
            href="#"
            className="text-gray-500 hover:text-white transition-colors text-sm"
          >
            {social}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans relative">
      <GlobalStyles />

      {/* Fixed Background for non-hero sections */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-950" />
        {/* Subtle global gradient mesh to match Aurora vibe */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950/0 to-transparent opacity-50" />
      </div>

      <div className="relative z-10">
        <Navbar />
        {/* Hero handles its own background, so it will sit on top of the fixed one seamlessly */}
        <Hero />
        <SocialProof />
        <BentoGrid />
        <Steps />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
