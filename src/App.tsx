import { useState, useCallback } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Partners } from './components/sections/Partners';
import { About } from './components/sections/About';
import { Team } from './components/sections/Team';
import { Services } from './components/sections/Services';
import { RehabInfo } from './components/sections/RehabInfo';
import { Locations } from './components/sections/Locations';
import { Contact } from './components/sections/Contact';
import { BookingModal } from './components/ui/BookingModal';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');

  const openGeneralBooking = useCallback(() => {
    setSelectedDoctor('');
    setSelectedService('');
    setIsBookingOpen(true);
  }, []);

  const openDoctorBooking = useCallback((doctorName: string) => {
    setSelectedDoctor(doctorName);
    setSelectedService('');
    setIsBookingOpen(true);
  }, []);

  const openServiceBooking = useCallback((serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setSelectedDoctor('');
    setIsBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsBookingOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-cairo">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBooking={openGeneralBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={openGeneralBooking} />
        <Partners />
        <About />
        <Team onBookDoctor={openDoctorBooking} />
        <Services onBookService={openServiceBooking} />
        <RehabInfo />
        <Locations onBookDoctor={openDoctorBooking} />
        <Contact onOpenBooking={openGeneralBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reusable Floating WhatsApp Quick Action */}
      <WhatsAppButton />

      {/* Contextual WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialDoctor={selectedDoctor}
        initialService={selectedService}
      />
    </div>
  );
}
