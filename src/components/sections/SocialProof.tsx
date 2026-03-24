"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  const stats = [
    { value: "2000+", label: "Happy Students", icon: "👩‍🎓" },
    { value: "5.0", label: "Google Rating", icon: "⭐" },
    { value: "100%", label: "Placement Support", icon: "🎯" },
    { value: "15+", label: "Expert Trainers", icon: "👨‍🏫" },
  ];

  return (
    <section className="py-12 bg-white border-b border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
