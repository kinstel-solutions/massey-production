'use client';

import { motion } from 'framer-motion';
import { Camera, Briefcase, User, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/lib/data';

const iconMap = {
  camera: <Camera className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  user: <User className="w-6 h-6" />
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium"
          >
            What We Offer
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl md:text-3xl font-bold"
          >
            Photography & Cinematography Services
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-black mx-auto"
          />
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-muted-foreground max-w-2xl mx-auto pt-4"
          >
            From intimate portraits to grand events, we offer a comprehensive range of photography and videography 
            services tailored to bring your vision to life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesData.map((category, index) => (
            <Link 
              href={`/services/${category.slug}`} 
              key={category.slug}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col group cursor-pointer"
              >
                <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[category.iconName]}
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-gray-700 transition-colors">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-8">{category.description}</p>
                
                <ul className="space-y-3 mt-auto">
                  {category.services.slice(0, 5).map((service) => (
                    <li key={service.slug} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-black/40 mt-0.5 shrink-0 group-hover:text-black transition-colors" />
                      <span>{service.title}</span>
                    </li>
                  ))}
                  {category.services.length > 5 && (
                    <li className="text-xs text-muted-foreground italic pl-7 pt-2">
                      + {category.services.length - 5} more services...
                    </li>
                  )}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100 text-xs font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors flex items-center">
                   View All Services
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

