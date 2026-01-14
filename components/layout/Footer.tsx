import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl">Massey Production</h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Capturing the essence of life's most precious moments through the lens of artistry and emotion.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-gray-400">Explore</h3>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link></li>
              <li><Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-gray-400">Contact Us</h3>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li>Hazratganj</li>
              <li>Lucknow, Uttar Pradesh, India</li>
              <li>+91 98765 43210</li>
              <li>hello@masseyproduction.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-gray-400">Newsletter</h3>
            <p className="text-gray-400 text-sm font-light mb-4">
              Subscribe to see our latest shoots and offers.
            </p>
            <div className="flex border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full outline-none text-sm placeholder-gray-500"
              />
              <button className="uppercase text-xs tracking-widest hover:text-gray-300">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            © {new Date().getFullYear()} Massey Production. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
