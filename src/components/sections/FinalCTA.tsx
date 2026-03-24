"use client";

import { motion } from "framer-motion";
import { PhoneCall, CalendarCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-600"></div>
      <div className="absolute inset-0 opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          Start Your Career Today
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto"
        >
          Join hundreds of successful students who have built their future with NEXGEN CAD. Seats are filling fast for the upcoming batch!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-brand-700 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-white/20 active:scale-95"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Book Free Demo</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
