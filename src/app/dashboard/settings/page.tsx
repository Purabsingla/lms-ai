"use client";

import React from "react";
import { User, CreditCard, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-white">Settings</h1>

      {/* SETTINGS NAV */}
      <div className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <button className="p-6 text-left hover:bg-white/5 transition-colors flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
              <User size={20} />
            </div>
            <div>
              <p className="font-semibold text-white">Profile</p>
              <p className="text-xs text-gray-500">Manage your account</p>
            </div>
          </button>
          <button className="p-6 text-left hover:bg-white/5 transition-colors flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <CreditCard size={20} />
            </div>
            <div>
              <p className="font-semibold text-white">Billing</p>
              <p className="text-xs text-gray-500">Manage subscriptions</p>
            </div>
          </button>
          <button className="p-6 text-left hover:bg-white/5 transition-colors flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
              <Shield size={20} />
            </div>
            <div>
              <p className="font-semibold text-white">Security</p>
              <p className="text-xs text-gray-500">Password & 2FA</p>
            </div>
          </button>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="bg-neutral-900 border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
        <h2 className="text-lg font-semibold text-white">Profile Details</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              defaultValue="Student User"
              className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              defaultValue="user@example.com"
              className="w-full bg-neutral-950 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-500 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
