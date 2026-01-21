import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Stats } from '@/components/home/Stats';
import { Portfolio } from '@/components/home/Portfolio';
import { WhyUs } from '@/components/home/WhyUs';
import { Services } from '@/components/home/Services';
import { Process } from '@/components/home/Process';
import { Testimonials } from '@/components/home/Testimonials';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Stats />
      <Portfolio />
      <WhyUs />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}

