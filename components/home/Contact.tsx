'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
              Let's Create Something Beautiful
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We would love to hear from you. Whether it's a wedding, a corporate event, or a personal portfolio, let's discuss how we can bring your vision to life.
            </p>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Call Us</p>
                   <p className="text-lg">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Email Us</p>
                   <p className="text-lg">hello@masseyproduction.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Visit Us</p>
                   <p className="text-lg">Hazratganj, Lucknow</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                   <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500">Business Hours</p>
                   <p className="text-lg">Mon-Sat: 10 AM - 8 PM</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-black p-8 md:p-12 rounded-sm shadow-xl"
          >
            <h3 className="font-serif text-2xl font-bold mb-6">Send us an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                    <input type="text" id="name" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors" placeholder="Your Name" />
                 </div>
                 <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                    <input type="tel" id="phone" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors" placeholder="Your Phone" />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                 <input type="email" id="email" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors" placeholder="Your Email" />
              </div>

              <div className="space-y-2">
                 <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Interested In</label>
                 <select id="service" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors bg-white">
                    <option value="">Select a Service</option>
                    <option value="wedding">Wedding & Events</option>
                    <option value="commercial">Commercial & Corporate</option>
                    <option value="fashion">Fashion & Portfolio</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                 <textarea id="message" rows={4} className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button type="submit" className="w-full bg-black text-white hover:bg-black/80 h-12 uppercase tracking-widest text-xs font-bold">
                   Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 text-white hover:bg-green-700 h-12 uppercase tracking-widest text-xs font-bold flex items-center justify-center rounded-md transition-colors">
                   WhatsApp Us
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
