'use client';

import { motion } from 'framer-motion';
import { Camera, Clock, Palette, Shield, Sparkles, Headphones } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Premium Equipment',
    description: 'We use the latest professional cameras, lenses, and lighting equipment to ensure exceptional image quality.',
  },
  {
    icon: Palette,
    title: 'Artistic Vision',
    description: 'Our creative team brings a unique artistic perspective to every shoot, making your photos stand out.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Receive your edited photos and videos within days, not weeks. We respect your time and excitement.',
  },
  {
    icon: Shield,
    title: 'Secure Delivery',
    description: 'Your memories are precious. We use encrypted cloud storage and provide multiple backup options.',
  },
  {
    icon: Sparkles,
    title: 'Unlimited Revisions',
    description: 'Not 100% satisfied? We offer unlimited revisions until you absolutely love every single frame.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 client support throughout your project. Questions answered, changes made, worries resolved.',
  },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
            Why Choose Massey Production
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold">
            The Massey Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            When you choose us, you're not just hiring photographers — you're partnering with artists who are as invested in your story as you are.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-black/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <feature.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="font-serif text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
