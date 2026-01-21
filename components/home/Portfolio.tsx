'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'wedding',
    title: 'Wedding & Events',
    description: 'From sacred rituals to joyful celebrations, we capture every emotion that makes your special day unforgettable.',
    image: '/portfolio-wedding.png',
    link: '/services/wedding-events',
  },
  {
    id: 'commercial',
    title: 'Commercial & Corporate',
    description: 'Professional imagery that elevates your brand, tells your story, and connects with your audience.',
    image: '/portfolio-commercial.png',
    link: '/services/commercial-corporate',
  },
  {
    id: 'fashion',
    title: 'Fashion & Portfolios',
    description: 'High-fashion editorials and portfolio shoots designed to launch careers and showcase talent.',
    image: '/portfolio-fashion.png',
    link: '/services/fashion-portfolios',
  }
];

export function Portfolio() {
  return (
    <section className="py-20 md:py-32 bg-white" id="portfolio">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium"
          >
            Our Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold"
          >
            Stories We've Told
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our curated collection of work across weddings, commercial projects, and fashion photography.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={category.link} className="block group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-serif">{category.title}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  <span 
                    className="inline-block mt-4 text-xs font-medium tracking-widest uppercase border-b border-black pb-1 group-hover:text-black/70 group-hover:border-black/70 transition-all"
                  >
                    View Services
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
