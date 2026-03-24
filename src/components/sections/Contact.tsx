"use client";

import { motion } from "framer-motion";
import { MessageSquare, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mocking form submission
    setTimeout(() => {
      console.log("Form Submitted Successfully - logged to console only as requested");
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Have questions about our courses or placement support? Drop us a message or visit our center in Kovilpatti.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <ul className="space-y-6 text-slate-600">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Our Location</strong>
                    <p>24/13, Siva Complex 1st Floor, A.K.S Road, Kovilpatti, Tamil Nadu 628502</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Phone Number</strong>
                    <p>+91 98765 43210</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 mb-1">Email Address</strong>
                    <p>info@nexgencad.com</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Embedded Google Map using a simpler iframe URL */}
            <div className="bg-slate-200 rounded-2xl overflow-hidden h-[300px] border border-slate-100 shadow-sm relative">
               <iframe 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24/13,+Siva+Complex+1st+Floor,+A.K.S+Road,+Kovilpatti,+Tamil+Nadu+628502+(NEXGEN%20CAD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-500/5 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-brand-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Send an Enquiry</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-slate-700 mb-2">Interested Course</label>
                  <select 
                    id="course" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  >
                    <option value="python">Python Full Stack</option>
                    <option value="autocad">AutoCAD 2D & 3D</option>
                    <option value="tally">Tally with GST</option>
                    <option value="sql">SQL & Database</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    submitted 
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30" 
                    : "bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/30 active:scale-[0.98]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : submitted ? "Successfully Submitted!" : "Submit Enquiry"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
