import { MapPin, Phone, Mail, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-500/30">
                N
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                NEXGEN CAD
              </span>
            </a>
            <p className="text-slate-400 mb-6 max-w-sm">
              Build your career with industry-ready skills. We offer professional training in Python, AutoCAD, Full Stack, Tally & more with 100% placement support.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#courses" className="hover:text-brand-400 transition-colors">All Courses</a></li>
              <li><a href="#why-us" className="hover:text-brand-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-brand-400 transition-colors">Student Reviews</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>24/13, Siva Complex 1st Floor, A.K.S Road, Kovilpatti, Tamil Nadu 628502</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span>info@nexgencad.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NEXGEN CAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
