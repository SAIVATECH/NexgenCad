"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Box, Calculator, Database, Briefcase } from "lucide-react";

export function Courses() {
  const courses = [
    {
      title: "Python Full Stack",
      description: "Master frontend and backend development with Python, Django, and React.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "AutoCAD 2D & 3D",
      description: "Learn precision drafting and 3D modeling for architecture and engineering.",
      icon: <Box className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Tally with GST",
      description: "Complete accounting software training with practical GST filing.",
      icon: <Calculator className="w-8 h-8" />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "SQL & Database",
      description: "Deep dive into database design, complex queries, and data management.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Placement Training",
      description: "Aptitude, resume building, and mock interviews to land your dream job.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-brand-50 text-brand-600",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Our Industry-Ready <span className="text-brand-600">Courses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Learn from the best. Our curriculum is designed by industry experts to get you job-ready.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all group flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 mix-blend-multiply ${course.color} transition-transform group-hover:scale-110`}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {course.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors group/button mt-auto"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
