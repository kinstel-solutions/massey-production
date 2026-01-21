'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
              <Image
                src="/portfolio-wedding.png"
                alt="Massey Production - Professional Photography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black/10 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
                About Our Studio
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight">
                Crafting Visual Stories Since 2015
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Massey Production, we believe every moment holds a story worth preserving. 
                Our journey began with a simple passion — to capture emotions, connections, 
                and the fleeting magic that makes life beautiful.
              </p>
              <p>
                Over the years, we've had the privilege of documenting countless weddings, 
                corporate milestones, and personal journeys. Our approach blends artistic 
                vision with technical excellence, ensuring every frame tells your unique narrative.
              </p>
              <p>
                From intimate ceremonies to grand celebrations, we bring the same level of 
                dedication, creativity, and attention to detail that has made us one of the 
                most trusted names in professional photography.
              </p>
            </div>

            {/* Signature Quote */}
            <div className="border-l-4 border-black pl-6 py-4">
              <p className="font-serif text-lg italic text-gray-800">
                "We don't just take pictures — we create timeless memories that generations will cherish."
              </p>
              <p className="mt-3 text-sm font-medium text-gray-500">
                — The Massey Production Team
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-12 pt-4">
              <div>
                <p className="font-serif text-2xl font-bold">10+</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold">500+</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold">1000+</p>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Events Covered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
