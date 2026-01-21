'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
          isScrolled || isMobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-border py-2 shadow-sm text-black'
            : 'bg-gradient-to-b from-black/50 to-transparent py-6 text-white'
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn("lg:hidden relative z-10", !isScrolled && !isMobileMenuOpen && "hover:bg-white/10 hover:text-white")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
            
            {/* Desktop Nav */}
            <nav className={cn(
              "hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide transition-colors duration-300",
               isScrolled ? "text-primary" : "text-white"
            )}>
              <Link href="#portfolio" className="hover:opacity-70 transition-opacity">PORTFOLIO</Link>
              <Link href="#services" className="hover:opacity-70 transition-opacity">SERVICES</Link>
              <Link href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</Link>
            </nav>
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className={cn(
              "font-serif font-bold tracking-tighter uppercase transition-all duration-300",
              isScrolled || isMobileMenuOpen ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            )}>
              Massey Production
            </h1>
          </Link>

          {/* Icons - Simplified for Portfolio */}
          <div className="flex items-center gap-2">
             <Link href="#contact">
              <Button variant="ghost" className={cn("hidden md:inline-flex transition-colors font-medium tracking-widest", !isScrolled && !isMobileMenuOpen && "hover:bg-white/10 hover:text-white")}>
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 overflow-y-auto"
          >
            <nav className="flex flex-col items-center space-y-8 mt-12">
              <Link 
                href="#portfolio" 
                className="text-xl font-serif font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link 
                href="#services" 
                className="text-xl font-serif font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link 
                href="#contact" 
                className="text-xl font-serif font-medium tracking-wide hover:opacity-70 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
