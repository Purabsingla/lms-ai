"use client"; // This is required because we use useState/useEffect

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Make sure you have lucide-react installed
import { motion, AnimatePresence } from "framer-motion";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle scroll effect
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
          {/* LOGO */}
          <div className="text-white font-bold text-xl">SaaSify</div>

          {/* DESKTOP LINKS */}
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

          {/* AUTH BUTTONS (The Magic Part) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Show this ONLY if user is NOT logged in */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Log in
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>

            {/* Show this ONLY if user IS logged in */}
            <SignedIn>
              <span className="text-sm text-gray-400 mr-2">Welcome back!</span>
              {/* This is the round profile picture button provided by Clerk */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
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

            {/* Mobile Auth Logic */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full py-3 bg-white text-black rounded-lg font-semibold">
                  Log In / Sign Up
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg">
                <span className="text-white">Account Settings</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
