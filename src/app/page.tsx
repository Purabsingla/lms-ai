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
} from "lucide-react";
import { AuroraHero } from "@/components/aurora-hero-bg";
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
    .animate-aurora {
      animation: aurora 60s linear infinite;
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 15s ease infinite;
    }
  `,
    }}
  />
);

// --- 1. AURORA BACKGROUND COMPONENT ---
// const AuroraBackground = ({
//   children,
//   className = "",
// }): { children: React.ReactNode; className: string } => {
//   return (
//     <div
//       className={`relative flex flex-col items-center justify-center overflow-hidden bg-black text-slate-950 transition-bg ${className}`}
//     >
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className={`
//             pointer-events-none absolute -inset-[10px] opacity-50
//             [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
//             [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-500)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
//             [background-image:var(--white-gradient),var(--aurora)]
//             [background-size:300%,_200%]
//             [background-position:50%_50%,50%_50%]
//             filter blur-[10px] invert dark:invert-0
//             after:content-[""] after:absolute after:inset-0
//             after:[background-image:var(--white-gradient),var(--aurora)]
//             after:[background-size:200%,_100%]
//             after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
//             pointer-events-none
//             absolute -inset-[10px] opacity-50
//             will-change-transform
//           `}
//         ></div>
//       </div>
//       <div className="relative z-10 w-full">{children}</div>
//     </div>
//   );
// };

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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`rounded-2xl border ${
            scrolled
              ? "bg-black/70 border-white/10 backdrop-blur-xl shadow-2xl"
              : "bg-transparent border-transparent"
          } px-6 py-4 flex items-center justify-between transition-all duration-300`}
        >
          <Logo />

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {["Features", "Testimonials", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </button>
            <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 mx-6 mt-2 bg-neutral-900/95 border border-white/10 rounded-2xl backdrop-blur-2xl md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {["Features", "Testimonials", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-gray-300"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Button className="w-full">Get Started</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden">
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
                <div className="w-8 h-8 rounded-full bg-white/10 mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-4 bg-white/5 rounded w-full" />
                  ))}
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="h-8 w-48 bg-white/10 rounded" />
                  <div className="h-8 w-8 bg-blue-500/20 rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-video bg-white/5 rounded-lg border border-white/5"
                    />
                  ))}
                </div>
                <div className="mt-8 h-32 bg-white/5 rounded-lg border border-white/5" />
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
    <div className="w-full bg-black py-12 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center mb-8">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by 10,000+ Students from
        </p>
      </div>
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
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
                className="text-2xl font-bold text-gray-700 hover:text-white transition-colors cursor-default"
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
    <section id="features" className="py-32 bg-black px-6">
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
            className="md:col-span-1 md:row-span-2 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="md:col-span-2 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden group flex flex-col md:flex-row items-center gap-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="md:col-span-1 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
            className="md:col-span-1 rounded-3xl p-8 border border-white/10 bg-neutral-900/50 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
      title: "Input Topic",
      desc: "Type anything. 'Medieval History' or 'Python for Data Science'.",
    },
    {
      num: "02",
      title: "AI Analysis",
      desc: "GPT-4o constructs a pedagogical tree of concepts.",
    },
    {
      num: "03",
      title: "Resource Fetch",
      desc: "We scrape YouTube and documentation for the best links.",
    },
    {
      num: "04",
      title: "Start Learning",
      desc: "Track progress, take quizzes, and earn certificates.",
    },
  ];

  return (
    <section className="py-32 bg-black px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-bold text-neutral-900 group-hover:text-neutral-800 transition-colors mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.desc.replace(/'/g, "\u2019")}
              </p>
              {i !== 3 && (
                <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent translate-x-1/2" />
              )}
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
        ? "border-blue-500/50 bg-blue-900/10"
        : "border-white/10 bg-neutral-900/30"
    } relative flex flex-col gap-6`}
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
      className="py-32 bg-black px-6 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 blur-[128px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[128px] rounded-full pointer-events-none" />

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
    <section id="faq" className="py-24 bg-black px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Questions?
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl bg-neutral-900/30 overflow-hidden"
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
  <footer className="py-12 px-6 border-t border-white/10 bg-black">
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
    <div className="bg-black min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans">
      <GlobalStyles />
      <Navbar />
      <Hero />
      <SocialProof />
      <BentoGrid />
      <Steps />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
