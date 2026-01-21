'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Massey Production - Professional Photography Studio"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6 max-w-4xl px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 text-white/80">
            Premium Photography & Cinematography Studio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 drop-shadow-lg">
            Where Moments Become
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              Timeless Memories
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed"
        >
          From intimate weddings to grand celebrations, we capture the emotions, 
          the laughter, and the love that make your story uniquely beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-12 justify-center items-center pt-4"
        >
          <Link 
            href="#contact" 
            className="inline-block bg-white text-black px-6 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-all"
          >
            Book Your Session
          </Link>
          <Link 
            href="#portfolio" 
            className="inline-flex items-center gap-2 border-2 border-white/60 px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all"
          >
            <Play className="w-3 h-3" />
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator - Film Reel Theme */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer group"
        >
          {/* Film Strip */}
          <div className="relative w-5 h-10 bg-white/20 rounded-sm overflow-hidden group-hover:bg-white/30 transition-colors">
            {/* Film Perforations - Animated */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-around items-center py-1"
            >
              <div className="w-2 h-1.5 bg-black/40 rounded-sm" />
              <div className="w-2 h-1.5 bg-black/40 rounded-sm" />
              <div className="w-2 h-1.5 bg-black/40 rounded-sm" />
            </motion.div>
          </div>
          {/* Arrow */}
          <ChevronDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}

