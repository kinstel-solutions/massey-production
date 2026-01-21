'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya & Rahul Sharma',
    event: 'Wedding Photography',
    rating: 5,
    review: 'Massey Production captured our wedding beautifully! Every candid moment, every ritual — they didn\'t miss a thing. The cinematic video still gives us goosebumps. Highly recommended for anyone looking for premium wedding photography.',
    location: 'Lucknow',
  },
  {
    name: 'Anjali Mehta',
    event: 'Fashion Portfolio',
    rating: 5,
    review: 'As an aspiring model, I needed a portfolio that would stand out. The team at Massey understood my vision perfectly and delivered stunning shots that helped me land my first agency contract!',
    location: 'Delhi',
  },
  {
    name: 'Vikram Industries',
    event: 'Corporate Event Coverage',
    rating: 5,
    review: 'We\'ve worked with Massey Production for three consecutive annual events. Their professionalism, quick delivery, and attention to brand guidelines make them our go-to photography partner.',
    location: 'Lucknow',
  },
  {
    name: 'Neha & Aditya Gupta',
    event: 'Pre-Wedding Shoot',
    rating: 5,
    review: 'Our pre-wedding shoot in Udaipur was an absolute dream! The team scouted amazing locations and made us feel so comfortable. The photos are like something out of a Bollywood movie.',
    location: 'Mumbai',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">
            Client Love
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it — hear from the hundreds of happy clients whose moments we've preserved.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 shadow-sm border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-gray-100">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-100 pt-6">
                <p className="font-serif text-base font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {testimonial.event} • {testimonial.location}
                </p>
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
          <p className="text-gray-600 mb-4">Ready to join our family of happy clients?</p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-3 text-xs font-bold tracking-[0.15em] uppercase hover:bg-black/80 transition-colors"
          >
            Book Your Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
