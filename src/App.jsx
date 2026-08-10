import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMissionVisionSection } from './components/AboutMissionVisionSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServicesSection } from './components/ServicesSection';
import { PatientExperienceAndProcessSection } from './components/PatientExperienceAndProcessSection';
import { TestimonialsAndStats } from './components/TestimonialsAndStats';
import { BookingSection } from './components/BookingSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ClinicInfoSection } from './components/ClinicInfoSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { DentalPortalModal } from './components/DentalPortalModal';
import { IntroLoader } from './components/IntroLoader';
import { RevealOnScroll } from './components/RevealOnScroll';
import { LanguageProvider } from './LanguageContext';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState(null);
  const [preselectedService, setPreselectedService] = useState(null);

  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [portalInitialMrn, setPortalInitialMrn] = useState('');

  const handleOpenBooking = (doctor, service) => {
    setPreselectedDoctor(doctor || null);
    setPreselectedService(service || null);
    
    // Smooth scroll directly to the Booking Section on the page
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingOpen(true);
    }
  };

  const handleOpenPortalWithMrn = (mrn) => {
    setPortalInitialMrn(mrn || 'ZIV-1001');
    setIsPortalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1f2623] selection:text-white">
        {/* Teeth Vector Rise & Spin Intro Revealer */}
        <IntroLoader onComplete={() => setIntroCompleted(true)} />

        {/* Main Page Reveal Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ 
            opacity: introCompleted ? 1 : 0, 
            y: introCompleted ? 0 : 15 
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Navigation Header */}
          <Navbar
            onOpenBooking={() => handleOpenBooking()}
            onOpenPortal={() => handleOpenPortalWithMrn()}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {/* Main Page Content */}
          <main>
            {/* HERO SECTION */}
            <HeroSection
              onOpenBooking={() => handleOpenBooking()}
              onOpenPortal={() => handleOpenPortalWithMrn()}
              isIntroCompleted={introCompleted}
            />

            {/* ABOUT US, MISSION & VISION */}
            <RevealOnScroll yOffset={40}>
              <AboutMissionVisionSection />
            </RevealOnScroll>

            {/* WHY CHOOSE US */}
            <RevealOnScroll yOffset={40}>
              <WhyChooseUsSection />
            </RevealOnScroll>

            {/* OUR SERVICES */}
            <RevealOnScroll yOffset={40}>
              <ServicesSection
                onSelectServiceForBooking={(service) => handleOpenBooking(null, service)}
              />
            </RevealOnScroll>

            {/* PATIENT EXPERIENCE, TREATMENT PROCESS, COMMITMENT, PATIENT EDUCATION */}
            <RevealOnScroll yOffset={40}>
              <PatientExperienceAndProcessSection />
            </RevealOnScroll>

            {/* TESTIMONIALS & FREQUENTLY ASKED QUESTIONS */}
            <RevealOnScroll yOffset={40}>
              <TestimonialsAndStats />
            </RevealOnScroll>

            {/* IN-PAGE BOOKING APPOINTMENT FORM SECTION */}
            <RevealOnScroll yOffset={40}>
              <BookingSection />
            </RevealOnScroll>

            {/* FINAL CALL TO ACTION */}
            <RevealOnScroll yOffset={40}>
              <FinalCtaSection
                onOpenBooking={() => handleOpenBooking()}
              />
            </RevealOnScroll>

            {/* CONTACT US & CLINIC HOURS */}
            <RevealOnScroll yOffset={40}>
              <ClinicInfoSection />
            </RevealOnScroll>
          </main>

          {/* FOOTER */}
          <RevealOnScroll yOffset={30}>
            <Footer
              onOpenBooking={() => handleOpenBooking()}
              onOpenPortal={() => handleOpenPortalWithMrn()}
            />
          </RevealOnScroll>
        </motion.div>

        {/* Appointment Scheduling Modal Wizard */}
        <AppointmentModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          preselectedDoctor={preselectedDoctor}
          preselectedService={preselectedService}
          onOpenPortalWithMrn={handleOpenPortalWithMrn}
        />

        {/* Secure Dental Records Portal Modal */}
        <DentalPortalModal
          isOpen={isPortalOpen}
          onClose={() => setIsPortalOpen(false)}
          initialMrn={portalInitialMrn}
        />
      </div>
    </LanguageProvider>
  );
}
