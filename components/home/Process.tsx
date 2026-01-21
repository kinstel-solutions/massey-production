'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList, Camera, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consultation',
    description: 'We start with a detailed discussion to understand your vision, preferences, and requirements for the perfect shoot.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planning',
    description: 'Our team creates a customized plan including location scouting, timeline, and creative direction tailored to your needs.',
  },
  {
    number: '03',
    icon: Camera,
    title: 'The Shoot',
    description: 'On the big day, our experienced team captures every precious moment with artistic precision and attention to detail.',
  },
  {
    number: '04',
    icon: Package,
    title: 'Delivery',
    description: 'Receive your professionally edited photos and videos in stunning quality, ready to be cherished forever.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-stone-100">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
            How It Works
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold">
            Our Simple Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the first conversation to the final delivery, we ensure a seamless and enjoyable experience for every client.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-gray-300" />
              )}

              <div className="bg-white p-8 shadow-sm border border-gray-100 h-full hover:shadow-lg transition-shadow">
                {/* Number */}
                <div className="absolute -top-4 left-8 bg-black text-white text-xs font-bold px-3 py-1 tracking-wider">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block border-2 border-black px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-all"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
