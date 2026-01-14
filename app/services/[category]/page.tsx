import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/lib/data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have a button component

export function generateStaticParams() {
  return servicesData.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = servicesData.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <Link 
          href="/#services" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </Link>

        <div className="mb-16 space-y-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold">{category.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.services.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${category.slug}/${service.slug}`}
              className="group block bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-medium uppercase tracking-widest text-sm border-b border-white pb-1">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-black/60 group-hover:text-black transition-colors">
                  Learn More <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
