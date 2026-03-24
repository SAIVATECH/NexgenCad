"use client";

import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    { src: "/placeholder-1.jpg", alt: "Classroom Session", colSpan: "col-span-1 border-brand-200 bg-brand-50" },
    { src: "/placeholder-2.jpg", alt: "Computer Lab Setup", colSpan: "col-span-2 border-accent-200 bg-accent-50" },
    { src: "/placeholder-3.jpg", alt: "Students Learning", colSpan: "col-span-2 border-slate-200 bg-slate-50" },
    { src: "/placeholder-4.jpg", alt: "Project Presentation", colSpan: "col-span-1 border-purple-200 bg-purple-50" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Experience at <span className="text-brand-600">NEXGEN CAD</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Take a look at our state-of-the-art facilities, modern computer labs, and engaging classroom sessions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl overflow-hidden group border ${img.colSpan} flex items-center justify-center`}
            >
              <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10 text-transparent">Image placeholder background</div>
              {/* Note: In a real app, use next/image here. Placeholder div serves as the image area */}
              <div className="text-slate-400 font-medium text-lg">📷 {img.alt}</div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-6 text-white font-bold text-lg">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
