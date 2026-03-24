"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Santhosh Kumar",
      course: "Python Full Stack",
      text: "Great learning experience in Python full stack... gained confidence to work on projects independently. The trainers are highly knowledgeable.",
    },
    {
      name: "Priya Darshini",
      course: "AutoCAD & Design",
      text: "They guide with genuine care and support... placement training program helped me secure a job right after graduation.",
    },
    {
      name: "Manoj M",
      course: "SQL & Database",
      text: "Trainers explained clearly with practical training. The lab assignments are very close to what we do in real IT companies.",
    },
    {
      name: "Karthick Raja",
      course: "Tally with GST",
      text: "Friendly teachers and updated lab with latest tech. Easily the best institute in Kovilpatti for professional courses.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Don&apos;t just take our word for it. Here is what our successful alumni think about their time at NEXGEN CAD.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 relative hover:bg-slate-800 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-700/50 rotate-180" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-slate-700 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-brand-400">{review.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
