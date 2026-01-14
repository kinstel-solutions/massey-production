import { Hero } from '@/components/home/Hero';
import { Portfolio } from '@/components/home/Portfolio';
import { Services } from '@/components/home/Services';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}
