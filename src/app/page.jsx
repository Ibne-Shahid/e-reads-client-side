
import Banner from '@/components/Banner'
import HowItWorks from '@/components/HowItWorks';
import CustomerTestimonials from '@/components/Testimonials';
import TopFoods from '@/components/TopFoods';
import WhyChoose from '@/components/WhyChoose';

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopFoods></TopFoods>
      <CustomerTestimonials></CustomerTestimonials>
      <WhyChoose></WhyChoose>
      <HowItWorks></HowItWorks>
    </div>
  );
}
