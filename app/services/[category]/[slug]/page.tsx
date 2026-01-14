import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/lib/data';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
  const params = [];
  for (const category of servicesData) {
    for (const service of category.services) {
      params.push({
        category: category.slug,
        slug: service.slug,
      });
    }
  }
  return params;
}

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  const { category: categorySlug, slug: serviceSlug } = await params;
  
  const category = servicesData.find((c) => c.slug === categorySlug);
  if (!category) notFound();

  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <Link 
          href={`/services/${category.slug}`}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to {category.title}
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
           {/* Image Section */}
           <div className="relative aspect-[4/5] md:aspect-square w-full bg-gray-100 overflow-hidden rounded-sm">
             <Image
               src={service.image}
               alt={service.title}
               fill
               priority
               className="object-cover"
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
           </div>

           {/* Content Section */}
           <div className="flex flex-col justify-center space-y-8">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 block">{category.title}</span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">{service.title}</h1>
                <p className="text-lg text-gray-600 leading-relaxed">{service.longDescription}</p>
              </div>

              <div className="border-t border-b border-gray-100 py-8 space-y-4">
                 <h3 className="font-serif text-xl font-bold">Why Choose Us?</h3>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-sm text-gray-600">
                     <CheckCircle2 className="w-5 h-5 text-black" /> Professional Equipment & Lighting
                   </li>
                   <li className="flex items-center gap-3 text-sm text-gray-600">
                     <CheckCircle2 className="w-5 h-5 text-black" /> Experienced Team
                   </li>
                   <li className="flex items-center gap-3 text-sm text-gray-600">
                     <CheckCircle2 className="w-5 h-5 text-black" /> Quick Turnaround Time
                   </li>
                 </ul>
              </div>

              <div className="pt-4">
                <Link href="/#contact">
                  <Button className="w-full md:w-auto h-12 px-8 text-base uppercase tracking-widest font-bold">
                    Book This Service
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
                  Questions? Call us at +91 98765 43210
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
