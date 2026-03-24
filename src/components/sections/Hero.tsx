"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: "4s" }}></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-medium text-sm mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
          </span>
          Admissions Open for 2026 Batch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
        >
          Build Your Career with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">
            Industry-Ready Skills
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Python, AutoCAD, Full Stack, Tally & More – Learn with Real Projects from industry experts and get 100% placement support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#courses"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-slate-900/20 active:scale-95 group"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-brand-600 hover:border-brand-200 hover:bg-brand-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg active:scale-95"
          >
            <PhoneCall className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Floating cards for parallax effect */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 1 }}
           className="hidden lg:block absolute left-4 top-1/4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-brand-500/10 border border-slate-100 rotate-[-6deg] hover:rotate-0 transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl">
              🌟
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">5.0 Rating</p>
              <p className="text-xs text-slate-500">575+ Reviews</p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="hidden lg:block absolute right-4 bottom-1/4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-brand-500/10 border border-slate-100 rotate-[6deg] hover:rotate-0 transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold text-xl">
              💼
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">100% Placement</p>
              <p className="text-xs text-slate-500">Assistance</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
