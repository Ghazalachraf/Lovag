import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import PromiseSection from '@/components/PromiseSection';
import ServicesSection from '@/components/ServicesSection';
import MaintenanceSection from '@/components/MaintenanceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTopButton from '@/components/BackToTopButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BookingSection />
        <TechMarquee />
        <PromiseSection />
        <ServicesSection />
        <MaintenanceSection />
        <ProjectsSection />
        <AboutSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </>
  );
}
