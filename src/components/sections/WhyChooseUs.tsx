"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    { title: "Friendly & Supportive Trainers", desc: "Learn in a stress-free environment where your questions are always welcome." },
    { title: "Real Project Training", desc: "Gain hands-on experience by working on real-world projects, not just theory." },
    { title: "100% Placement Support", desc: "We guide you from resume building to setting up your final interviews." },
    { title: "Affordable Fees", desc: "High-quality education that doesn't break the bank. Flexible payment options available." },
    { title: "Updated Labs & Software", desc: "Practice on modern equipment loaded with the latest industry-standard software." },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square max-h-[600px] bg-slate-100 border border-slate-200 shadow-xl">
              {/* Decorative elements representing labs/students */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-blue-600/10 mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-8">
                 <div className="w-full h-full border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-400 bg-white/50 backdrop-blur-sm">
                    <span className="text-6xl mb-4">🎓</span>
                    <span className="font-medium text-lg text-slate-500 text-center">Modern Lab Infrastructure<br/>(Student Learning Experience)</span>
                 </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">Industry Certified</p>
                    <p className="text-slate-600 text-sm">Recognized Training Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why <span className="text-brand-600">NEXGEN CAD</span> is the <br className="hidden md:block"/> Right Choice for You
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We don&apos;t just teach; we mentor. Our focus is completely on giving you the real-world skills that employers are actively looking for right now.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  key={index} 
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
