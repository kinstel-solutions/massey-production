'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Farzana Fehmi Latest Collection - Ethnic Luxury"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Mood overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6 max-w-4xl px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 text-gray-200">
            LUCKNOW'S PREMIER STUDIO | Wedding & Events
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            BEST PHOTOGRAPHER IN LUCKNOW
          </h1>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
           <Link 
             href="/#services" 
             className="inline-block border-2 border-white/80 px-8 py-3 text-base md:text-lg font-medium tracking-[0.15em] hover:bg-white hover:text-black transition-all uppercase"
           >
             Explore Our Work
           </Link>
        </motion.div>
      </div>
    </section>
  );
}
